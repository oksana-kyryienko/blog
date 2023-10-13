import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "./Post/Post";
import { Comment } from "./Comment/Comment";
import { AddContentForm } from "./AddContentForm/AddContentForm";

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data.slice(0, 10));
    });

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data.slice(0, 10));
      });
  }, []);

  const handlePostAdded = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts.slice(0, 9)]);
  };

  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <div>
      <h1>Blog Page</h1>

      <AddContentForm
        onPostAdded={handlePostAdded}
        onCommentAdded={handleCommentAdded}
      />

      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}

      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
