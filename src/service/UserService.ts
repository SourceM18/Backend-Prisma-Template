import { BaseService } from "./BaseService";
import { UserCreateInput } from "../input/UserCreateInput";

export class UserService extends BaseService {
  findAll() {
    return this.prisma.user.findMany({
      include: { comments: {
          include: {
            post: true
          }
        }
      }
    });
  }

  findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id},
        include: { comments: {
          include: {
            post: true
          }
        }
      }
    });
  }

  createUser(input: UserCreateInput) {
    return this.prisma.user.create({
      data: {
        email: input.data.email,
        name: input.data.name,
      },
      include: {
        comments: {
          include: {
            post: true
          }
        }
      }
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id
      },
      include: {
        comments: {
          include: {
            post: true
          }
        }
      }
    });
  }
}