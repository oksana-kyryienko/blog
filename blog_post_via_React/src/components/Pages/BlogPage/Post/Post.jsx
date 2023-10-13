import PropTypes from "prop-types";
import './Post.css'; 

export const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
