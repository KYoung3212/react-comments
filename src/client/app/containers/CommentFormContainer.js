import React from "react"
import CommentForm from "../components/CommentForm"
import comments from "../data/comments"

const CHARACTER_LIMIT = 200

class CommentFormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      author: "",
      comment: "",
      charsLeft: CHARACTER_LIMIT
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value })
  }

  handleCommentChange(event) {
    const input = event.target.value
    const length = input.length
    if (length <= CHARACTER_LIMIT) {
      this.setState({
        comment: input,
        charsLeft: CHARACTER_LIMIT - length
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const author = this.state.author
    const comment = this.state.comment
    const timestamp = new Date()
    if (!author || !comment)
      return

    // TODO generate an actual ID, such as GUID/UUID
    comments.push({
      id: 42,
      author: author,
      text: comment,
      timestamp: timestamp
    })
    this.setState({
      author: "",
      comment: "",
      charsLeft: CHARACTER_LIMIT
    })
  }

  render() {
    return (
      <CommentForm author={this.state.author}
                   comment={this.state.comment}
                   charsLeft={this.state.charsLeft}
                   charLimit={CHARACTER_LIMIT}
                   onAuthorChange={this.handleAuthorChange}
                   onCommentChange={this.handleCommentChange}
                   onSubmit={this.handleSubmit}/>
    )
  }
}

export default CommentFormContainer