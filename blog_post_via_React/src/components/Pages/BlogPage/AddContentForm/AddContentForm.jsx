import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './AddContentForm.css';

export const AddContentForm = ({ onPostAdded, onCommentAdded }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [commentBody, setCommentBody] = useState('');

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1,
      });

      onPostAdded(response.data);
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
        postId: 1,
        name,
        body: commentBody,
        email: 'test@example.com',
      });

      onCommentAdded(response.data);
      setName('');
      setCommentBody('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handlePostSubmit}>
        <h3>Add Post</h3>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
        </div>
        <button type="submit">Add Post</button>
      </form>

      <form onSubmit={handleCommentSubmit}>
        <h3>Add Comment</h3>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Comment:</label>
          <textarea value={commentBody} onChange={(e) => setCommentBody(e.target.value)} required />
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

AddContentForm.propTypes = {
  onPostAdded: PropTypes.func.isRequired,
  onCommentAdded: PropTypes.func.isRequired,
};