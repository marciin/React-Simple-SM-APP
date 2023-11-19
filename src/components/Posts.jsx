import React from 'react';
import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';

const Posts = ({ author }) => {
  const [inputValues, setInputValues] = useState({ title: '', text: '' });
  const [displayedValues, setDisplayedValues] = useState({
    title: '',
    text: '',
  });

  const [postId, setPostId] = useState(1);

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="p-5 border-solid border-2">
      {!formSubmitted ? (
        <NewPost
          inputValues={inputValues}
          setInputValues={setInputValues}
          author={author}
          setFormSubmitted={setFormSubmitted}
          setDisplayedValues={setDisplayedValues}
          setPostId={setPostId}
          postId={postId}
        />
      ) : (
        <Post
          setFormSubmitted={setFormSubmitted}
          setInputValues={setInputValues}
          displayedValues={displayedValues}
          author={author}
          // postId={postId}
        />
      )}
    </div>
  );
};

export default Posts;
