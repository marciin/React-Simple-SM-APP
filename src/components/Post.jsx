import React from 'react';
import { useState } from 'react';
import AllComments from './AllComments';

const Post = ({
  setFormSubmitted,
  setInputValues,
  displayedValues,
  author,
}) => {
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [showComment, setShowComment] = useState(false);

  const updateLikes = () => {
    setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes + 1);
  };

  const newComment = () => {
    setShowComment(showComment == true ? false : true);
  };

  const handleEdit = () => {
    setFormSubmitted(false);
    setInputValues({
      title: displayedValues.title,
      text: displayedValues.text,
    });
  };

  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold w-64 bg-white">{displayedValues.title}</h1>
          <button
            className="rounded-lg border-2 p-2 m-2 w-24 bg-blue-400"
            onClick={handleEdit}
          >
            EDIT
          </button>
        </div>
        <h4 className="opacity-40">{author}</h4>
        <p
          style={{ overflowWrap: 'break-word' }}
          className="mt-2 bg-white w-full"
        >
          {displayedValues.text}
        </p>
      </div>
      <div className="flex justify-around pt-5 font-bold font text-slate-400">
        <div className="flex">
          <p className="pr-2">{numberOfLikes}</p>
          <p className="cursor-pointer" onClick={updateLikes}>
            LIKES
          </p>
        </div>
        <p className="cursor-pointer" onClick={newComment}>
          COMMENT
        </p>
      </div>
      <div id="comments" className="pt-5">
        {showComment ? <AllComments /> : <></>}
      </div>
    </div>
  );
};

export default Post;
