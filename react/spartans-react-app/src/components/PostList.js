import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = ({ page, perPage }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _page: page, _limit: perPage }
      });
      setPosts(response.data);
    };

    fetchPosts();
  }, [page, perPage]);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
