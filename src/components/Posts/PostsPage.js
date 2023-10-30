import React from 'react';
import PostsHeader from './PostsHeader';
import PostsFooter from './PostsFooter';
import PostsList from './PostsList';


function PostsPage() {
    return (
        <div>
            <PostsHeader />
            <PostsList />
            <PostsFooter />
        </div>
    )

}
export default PostsPage