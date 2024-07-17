// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteCommentId} = props
  const {id, name, comment, isLiked, initialColor} = commentDetails
  const date = formatDistanceToNow(new Date())

  const username = name[0].toUpperCase()

  const likeClassName = isLiked ? 'like-text-color' : 'like-text'
  const likeParaText = isLiked ? 'Liked' : 'Like'

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedButton = () => {
    toggleIsLiked(id)
  }

  const onDeleteBtn = () => {
    deleteCommentId(id)
  }

  return (
    <li className="comment-details">
      <div className="comment-section-details">
        <div className={`first-name ${initialColor}`}>
          <p className="user-name">{username}</p>
        </div>
        <div className="last-name">
          <div className="last-name-top">
            <p className="full-name">{name}</p>
            <p className="date">{date} ago</p>
          </div>
          <div className="comment-by-user">
            <p className="comment">{comment}</p>
          </div>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="liked">
          <img src={likeImg} className="like" alt="Like" />
          <button className={likeClassName} onClick={likedButton} type="button">
            {likeParaText}
          </button>
        </div>
        <button
          className="delete"
          type="button"
          data-testid="delete"
          onClick={onDeleteBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
