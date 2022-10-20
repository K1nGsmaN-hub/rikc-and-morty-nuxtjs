import { IComment } from 'types/DTO/comment'

export default class CommentSerialization {
  serializeCommentList(comments: IComment[]) {
    let count: number = 0
    comments.forEach((comment) => {
      count += comment.child.length + 1
    })
    return {
      count,
      comments,
    }
  }
}
