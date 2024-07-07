import React, { useState } from 'react';
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';

import './App.css'

const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(null);

    const handleSavePost = (post) => {
        if (currentPost) {
            setPosts(posts.map((p) => (p.id === post.id ? post : p)));
        } else {
            setPosts([...posts, post]);
        }
        setCurrentPost(null);
    };

    return (
        <div className="app-container">
            <h1 className="main-heading">Comments</h1>
            <p className="paragraph">Say something about <span className="span">WYLO</span></p>
            <CreatePost currentPost={currentPost} onSave={handleSavePost} />
            <hr className="hr-line" />
            <PostsDisplay posts={posts} setPosts={setPosts} setCurrentPost={setCurrentPost} />
        </div>
    );
};

export default App;
