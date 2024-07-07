import React from 'react';

import './index.css'

const PostItem = ({ post, onEdit, onDelete }) => {
    const name = post.title[0].toUpperCase()
    return (
        <div className="post-item-container">
            <div className="name-container">
            <p className="name">{name}</p>
            <h3 className="post-title">{post.title}</h3>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="button-container">
            <button className="post-item-button" onClick={() => onEdit(post)}>Edit</button>
            <button className="post-item-button" onClick={() => onDelete(post.id)}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;

