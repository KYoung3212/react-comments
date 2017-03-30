import React from "react"
import formatTimestamp from "../utils/formatTimestamp"

const Comment = (props) => (
  <div className="comment">
    <p className="commentText">
      {props.children}
    </p>
    <span className="commentAuthor">
      - {props.author}
    </span>
    <span className="commentTimestamp">
      , posted on {props.timestamp ? formatTimestamp(props.timestamp) : "unknown date"}
    </span>
  </div>
)

Comment.defaultProps = {
  author:   <em>(author unknown)</em>,
  children: <em>(empty)</em>
}

Comment.propTypes = {
  author:     React.PropTypes.string.isRequired,
  children:   React.PropTypes.any.isRequired,
  timestamp:  React.PropTypes.string.isRequired
}

export default Comment