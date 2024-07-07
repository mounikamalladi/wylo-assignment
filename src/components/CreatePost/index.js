import React, { useState, useEffect } from 'react';

import './index.css'

const CreatePost = ({ currentPost, onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (currentPost) {
            setTitle(currentPost.title);
            setContent(currentPost.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [currentPost]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const post = { id: currentPost ? currentPost.id : Date.now(), title, content };
        onSave(post);
        setTitle('');
        setContent('');
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1 className="heading">Create Post</h1>
            <div className="card-container">
            <div className="input-container">
            <label className="label-element" for="name">Name</label>
            <input
                id="name"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="input-element"
                required
            />
            </div>
            <div className="input-container">
            <label className="label-element" for="content">Comment</label>
            <textarea
                id="content"
                placeholder="Comment"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                className="input-element"
                required
            />
            </div>
            <button className="button" type="submit">{currentPost ? 'Update Post' : 'Create Post'}</button>
            </div>
        </form>
    );
};

export default CreatePost;
