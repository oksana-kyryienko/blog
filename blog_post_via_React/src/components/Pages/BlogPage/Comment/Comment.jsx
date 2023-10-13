import PropTypes from "prop-types";
import './Comment.css'; 

export const Comment = ({ comment }) => {
  return (
    <div className="comment-container" key={comment.id}>
      <strong className="comment-name">{comment.name}</strong>
      <p className="comment-body">{comment.body}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
