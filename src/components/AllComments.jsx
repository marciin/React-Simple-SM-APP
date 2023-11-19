import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
import { useState } from 'react';

const AllComments = () => {
  const [allComments, setAllComments] = useState([]);
  const [commentsLimit, setCommentsLimit] = useState(3);

  const showMoreComments = () => {
    setCommentsLimit(commentsLimit + 3);
  };

  return (
    <div>
      <NewComment allComments={allComments} setAllComments={setAllComments} />
      <div>
        {allComments.slice(0, commentsLimit).map((comment) => (
          <Comment
            comment={comment.comment}
            author={comment.author}
            id={comment.id}
            key={comment.id}
          />
        ))}
        {allComments.length > commentsLimit && (
          <div className="flex justify-center pt-4">
            <p className="cursor-pointer font-bold" onClick={showMoreComments}>
              Show More
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllComments;
