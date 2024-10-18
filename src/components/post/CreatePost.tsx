import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../state/store';
import { addPost } from '../../state/post/postSlice';
import { createPost } from '../../services/api'; // API call to create post
import { Box, TextField, Button } from '@mui/material';

const CreatePost: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    if (content.trim() === '') return; // Don't submit empty posts

    try {
      const newPost = await createPost({ content, user: 'User123' }); // Mock user
      dispatch(addPost(newPost)); // Dispatch Redux action to add post to state
      setContent(''); // Clear the form
    } catch (err) {
      console.error('Failed to create post', err);
    }
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="What's on your mind?"
        multiline
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ marginBottom: '1rem' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Post
      </Button>
    </Box>
  );
};

export default CreatePost;
