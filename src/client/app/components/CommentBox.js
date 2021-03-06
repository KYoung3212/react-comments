import React from "react"
import CommentListContainer from "../containers/CommentListContainer"
import CommentFormContainer from "../containers/CommentFormContainer"

const CommentBox = ({data}) => (
  <div className="commentBox">
    <h1 className="commentBoxHeader">
      Comments
    </h1>
    <CommentListContainer data={data}/>
    <CommentFormContainer />
  </div>
)

CommentBox.propTypes = {
  data: React.PropTypes.object
}

export default CommentBox