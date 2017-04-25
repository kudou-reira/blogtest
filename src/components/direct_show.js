import React from 'react';
import PropTypes from 'react';
import {connect} from 'react-redux';
import {getSinglePost, deletePost} from '../actions/index';
import  {Link} from 'react-router';


class DirectShow extends React.Component{
    
    
    static contextTypes = {
        
        router: PropTypes.object
        
    };
    
    
    componentWillMount() {
        
        this.props.getSinglePost(this.props.params.id);
        
    }
    
    onDeleteChange() {
        
        this.props.deletePost(this.props.params.id).then(() => {this.context.router.push('/');});
        
    }
    
    render()  {
        
        if(!this.props.post){
            return <div>Still loading</div>;
        }
        
        return(
        
            <div className = "moveDown">
                <Link to = "/">Go back to Blog Main Page</Link>
                <button className = "btn btn-danger pull-xs-right"
                onClick = {this.onDeleteChange.bind(this)}>
                    Delete this post!
                </button>
                <h3>{this.props.post.title}</h3>
                <h5>Categories: {this.props.post.categories}</h5>
                <p>{this.props.post.content}</p>
            </div>
            
        );
        
    }
    
}

//export props so it shows up in blog post index, use mapStateToProps

function mapStateToProps(state){

    return {post: state.posts.post}
}

export default connect(mapStateToProps, {getSinglePost, deletePost})(DirectShow);