import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostList.css';

const PostList = ({ page, perPage }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://reqres.in/api/users', {
        params: { page: page, per_page: perPage }
      });
      setPosts(response.data.data);
    };

    fetchPosts();
  }, [page, perPage]);

  return (
    <div className="post-container">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h3>{post.id}</h3>
          <h2>{post.first_name} {post.last_name}</h2>
          <p>{post.email}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
