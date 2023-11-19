import React from 'react';
import { useState, useEffect } from 'react';
import Posts from './Posts';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const addNewPost = () => {
    const newPostData = {
      title: '',
      author: 'Andrew Huberman',
      text: '',
    };

    setPosts([...posts, newPostData]);
  };

  return (
    <div className="w-3/4 h-auto min-h-screen bg-zinc-50 flex items-center m-auto border-solid border-x-2 flex-col">
      <div>
        Feed
        {posts.map((post, index) => (
          <Posts
            index={index}
            title={post.title}
            author={post.author}
            text={post.text}
          />
        ))}
      </div>

      <div className="footer absolute left-1/4 top-0">
        <button
          className="border-2 rounded-xl border-solid bg-sky-600 text-white p-2"
          onClick={addNewPost}
        >
          NEW
        </button>
      </div>
    </div>
  );
};

export default Feed;
