import React from 'react';
import PostItem from '../PostItem';

import './index.css'

const PostsDisplay = ({ posts, setPosts, setCurrentPost }) => {
    

    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <div className="display-container">
            <p className="comment">Comments</p>
            <div className="comments-container">
            {posts.map((post) => (
                <PostItem 
                    key={post.id} 
                    post={post} 
                    onEdit={setCurrentPost} 
                    onDelete={handleDelete} 
                />
            ))}
        </div>
        </div>
    );
};

export default PostsDisplay;

