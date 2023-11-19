import React from 'react';

const Comment = ({ comment, author, id }) => {
  console.log(comment);
  return (
    <div>
      <div className="flex pt-5">
        <img
          src={require('../images/elon.jpeg')}
          alt="Profile Pic"
          className="w-12 h-12 rounded-lg"
        />
        <div className="pl-5 bg-white w-64 rounded-lg ">
          <p className="opacity-50">{author}</p>
          <p className="" id={id} key={id}>
            {comment}
          </p>
          {/* <p className="font-bold text-sm">Reply</p> */}
        </div>
      </div>
    </div>
  );
};

export default Comment;
