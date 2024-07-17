import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteCommentId = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColor = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name,
      comment,
      isLiked: false,
      initialColor: initialBackgroundColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Comments</h1>
        <div className="top-section">
          <form className="comment-section" onSubmit={this.onAddComment}>
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              value={name}
              className="user-name-input"
              placeholder="Your Name"
              onChange={this.onChangeName}
            />
            <textarea
              rows="8"
              cols="55"
              className="user-comment-input"
              onChange={this.onChangeComment}
              value={comment}
              placeholder="Your Comment"
            />

            <br />
            <div className="button-container">
              <button type="submit" className="button">
                Add Comment
              </button>
            </div>
          </form>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="comments-count-section">
          <p className="comments-count">{commentsList.length}</p>
          <p className="comments">Comments</p>
        </div>
        <ul className="comments-container">
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              toggleIsLiked={this.toggleIsLiked}
              deleteCommentId={this.deleteCommentId}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
