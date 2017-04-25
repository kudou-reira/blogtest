import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPost} from '../actions/index';
import {Link} from 'react-router';

//change this component to a container because container communicates with entire application state

class BlogIndex extends React.Component {
    
    componentWillMount(){
        
        this.props.getPost();
        
    }
    
    showPost() {

        const stuff = this.props.posts.map((post) => {
            
            return(
         
                <li className = "list-group-item moveDown" key = {post.id}>
                    <Link to = {"post/" + post.id}>
                        <span className = "pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
            
        });
        
        return stuff;
    
    }
    
    render() {
        
        return (
            <div className = "moveDown">
                <div className = "text-xs-right">
                    <Link to = "/post/new" className = "btn btn-danger">
                        Add a post
                    </Link>
                </div>
                <h3>Blog Posts Made</h3>
                <ul className = "list-group">
                    {this.showPost()}
                </ul>
            </div>
        );
    }
    
}

/*

function mapDispatchToProps(dispatch) {
        
        return bindActionCreators({getPost}, dispatch);
        
}

*/

function mapStateToProps(state) {
    
    return {posts: state.posts.all};
}

export default connect(mapStateToProps, {getPost})(BlogIndex);