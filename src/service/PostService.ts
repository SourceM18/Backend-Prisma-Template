import { BaseService } from './BaseService';
import { PostCreateInput } from "../input/PostCreateInput";

export class PostService extends BaseService {
  findAll() {
    return this.prisma.post.findMany({
      include: {
        comments: {
          include: {
            user: true,
            post: true,
          }
        }
      }
    });
  }

  findById(id: number) {
    return this.prisma.post.findUnique({
      where: { id: id},
      include: {
        comments: {
          include: {
            user: true,
            post: true,
          }
        }
      }
    });
  }

  createPost(input: PostCreateInput) {
    return this.prisma.post.create({
      data: {
        content: input.data.content,
        title: input.data.title,
      },
      include: {
        comments: {
          include: {
            user: true,
            post: true,
          }
        }
      }
    });
  }

  deletePost(id: number) {
    return this.prisma.post.delete({
      where: {
        id: id
      },
      include: {
        comments: {
          include: {
            user: true,
            post: true,
          }
        }
      }
    });
  }
}