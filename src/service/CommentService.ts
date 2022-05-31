import { BaseService } from "./BaseService";
import { CommentCreateInput } from "../input/CommentCreateInput";

export class CommentService extends BaseService {
  findAll() {
    return this.prisma.comment.findMany({
      include: {
        user: true,
        post: true,
      }
    });
  }

  findById(id: number) {
    return this.prisma.comment.findUnique({
      where: { id: id},
      include: {
        user: true,
        post: true,
      }
    });
  }

  createComment(input: CommentCreateInput) {
    return this.prisma.comment.create({
      data: {
        textComment: input.data.textComment,
        user: {
          connect: { id: input.data.userId },
        },
        post: {
          connect: { id: input.data.postId },
        },
      },
      include: {
        user: true,
        post: true
      }
    })
  }

  deleteComment(id: number) {
    return this.prisma.comment.delete({
      where: {
        id: id
      },
      include: {
        user: true,
        post: true
      }
    });
  }
}