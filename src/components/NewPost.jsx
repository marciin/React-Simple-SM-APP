import React from 'react';
import { useState } from 'react';

const NewPost = ({
  setInputValues,
  inputValues,
  setDisplayedValues,
  setFormSubmitted,
  author,
  postId,
  setPostId,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayedValues({ title: inputValues.title, text: inputValues.text });
    setInputValues({ title: '', text: '' });
    setFormSubmitted(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id={postId}>
      <form onSubmit={handleSubmit}>
        <input
          className="font-bold w-64"
          placeholder="Title"
          name="title"
          value={inputValues.title}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="rounded-lg border-2 p-2 m-2 w-24 bg-lime-500"
        >
          SUBMIT
        </button>
        <h4 className="opacity-40 w-64">{author}</h4>
        <input
          className="mt-2 w-full"
          placeholder="Text"
          name="text"
          value={inputValues.text}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-2 w-32"
          // style={{ display: 'none' }}
        />
        {selectedImage && (
          <img src={selectedImage} style={{ width: '200px' }} />
        )}
      </form>
    </div>
  );
};

export default NewPost;
