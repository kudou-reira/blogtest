import axios from 'axios';

export const GET_POST = 'GET_POST';
export const MAKE_POST = 'MAKE_POST';
export const GET_SINGLEPOST = 'GET_SINGLEPOST';
export const DELETE_POST = 'DELETE_POST';

const url = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=1258609890382190689028193028190';


export function getPost() {
    
    const request = axios.get(url + "/posts" + apiKey);
    
    return {
        
        type: GET_POST,
        payload: request
        
    };
    
}

export function makePost(props) {
    
    const request = axios.post(url + "/posts" + apiKey, props);
    
    return {
        
        type: MAKE_POST,
        payload: request
        
    };
    
}

export function getSinglePost(id) { 
    
    const request = axios.get(url + "/posts/" + id + apiKey);
    
    return {

        type: GET_SINGLEPOST,
        payload: request
    
    }
    
}

export function deletePost(id) {
    
    const request = axios.delete(url + "/posts/" + id + apiKey);
    
    return {

        type: DELETE_POST,
        payload: request
    
    }
    
}