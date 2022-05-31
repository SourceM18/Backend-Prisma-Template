export type CommentCreateInput = {
  data: {
    textComment?: string
    userId: number
    postId: number
  }
}