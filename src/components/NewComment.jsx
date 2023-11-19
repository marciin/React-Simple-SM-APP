import React from 'react';
import { useState } from 'react';

const NewComment = ({ allComments, setAllComments }) => {
  const [inputValue, setInputValue] = useState('');
  const [idCounter, setIdCounter] = useState(1);

  const addNewComment = (e) => {
    e.preventDefault();
    let comment = inputValue;
    let commentData = {
      comment,
      author: 'Jack Wilsons',
      id: idCounter,
    };

    setAllComments([...allComments, commentData]);
    setInputValue('');
    setIdCounter(idCounter + 1);
  };

  const handleInputChange = (e) => {
    setInputValue((prevInputValue) => (prevInputValue, e.target.value));
  };

  return (
    <div>
      <form className="flex justify-between" onSubmit={addNewComment}>
        <img
          src={require('../images/elon.jpeg')}
          alt="Profile Pic"
          className="w-12 rounded-lg"
        />
        <input
          type="text"
          placeholder="Comment"
          className="w-10/12 rounded-lg"
          value={inputValue}
          onChange={handleInputChange}
          id="comment"
          style={{ border: '2px solid black;' }}
        />
      </form>
    </div>
  );
};

export default NewComment;
