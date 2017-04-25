import { combineReducers } from 'redux';
import ReducerBlog from './reducer_blog';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  
    posts: ReducerBlog,
    form: formReducer
    
});

export default rootReducer;
