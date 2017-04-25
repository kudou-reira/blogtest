import React, {PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {makePost} from '../actions/index';
import {Link} from 'react-router';

//reduxform is similar to redux connect

class BlogNew extends React.Component{
    
    static contextTypes = {
        
        //get access, but don't use  this so often!
        
        router: PropTypes.object
        
    };

    onSubmit(props) {
        
        this.props.makePost(props)
        .then(() =>{
            
            //makes path "url" for new post
            
            this.context.router.push('/');
            
        });
        
    }

    render() {
        
        const handleSubmit = this.props.handleSubmit;
        
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;
        
        console.log(title);
        
        return (
            
            //...destruct object as input, make sure every one of properties shows on input
            
            // the "..." is a spread operator that encapsulates all objects
            
            //form onSubmit needs an action creator
            
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
            
                <h3 className = "moveDown">Write New Post</h3>
                
                <div className = "moveDown">
                    <div className = {`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                        <label>Title</label>
                        <input type = "text" className = "form-control" {...title} />
                        <div className = "text-help">
                            {title.touched ? title.error : ''}
                        </div>
                    </div>
                </div>
            
                <div className = "moveDown">
                    <div className = {`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                        <label>Categories</label>
                        <input type = "text" className = "form-control" {...categories} />
                        <div className = "text-help">
                            {categories.touched ? categories.error : ''}
                        </div>
                    </div>
                </div>
            
                <div className = "moveDown">
                    <div className = {`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                        <label>Content</label>
                        <input type = "text" className = "form-control" {...content} />
                        <div className = "text-help">
                            {content.touched ? content.error : ''}
                        </div>
                    </div>
                </div>
            
                <button type = "submit" className = "btn btn-primary">Save</button>
                <Link to = "/" className = "btn btn-danger">Cancel</Link>

            </form>
        );
    }
}

function validate(val){

    const errors = {};
    
    if(!val.title) {
        
        errors.title = 'Enter a title';   
    }
    
    if(!val.categories) {
        
        errors.categories = 'Enter categories';
        
    }
    
     if(!val.content) {
        
        errors.content = 'Enter content';
        
    }
    
    return errors;

}

//reduxForm: form configuration -> mapStateToProps -> mapDispatchToProps

export default reduxForm({
    
    form: "BlogNew",
    fields: ["title", "categories", "content"],
    validate
    
}, null, {makePost})(BlogNew);

//type something in...record on application state
