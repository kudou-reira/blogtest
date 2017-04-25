import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import BlogIndex from './components/blog_index';
import BlogNew from './components/blog_new';
import DirectShow from './components/direct_show';

const Welcome = () => {
    
    return <div>Welcome</div>;
    
}

export default(
    
    <Route path = "/" component = {App}>
        <IndexRoute component = {BlogIndex} />
        <Route path = "post/new" component = {BlogNew} />
        <Route path = "post/:id" component = {DirectShow} />
    </Route>
);