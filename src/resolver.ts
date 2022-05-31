import { idInput } from "./input/IdUnput";
import { PostCreateInput } from "./input/PostCreateInput";
import { UserCreateInput } from "./input/UserCreateInput";
import { CommentCreateInput } from "./input/CommentCreateInput";
import { UserService } from "./service/UserService";
import { PostService } from "./service/PostService";
import { CommentService } from "./service/CommentService";

const userService = new UserService;
const postService = new PostService;
const commentService = new CommentService;

export const resolvers = {
// query
  // user
  getAllUsers: () => {
    return userService.findAll();
  },
  getUserById: (idInput: idInput) => {
    return userService.findById(idInput.id);
  },

  // post
  getAllPosts: () => {
    return postService.findAll();
  },
  getPostById: (idInput: idInput) => {
    return postService.findById(idInput.id);
  },

  // comment
  getAllComments: () => {
    return commentService.findAll();
  },
  getCommentsById: (idInput: idInput) => {
    return commentService.findById(idInput.id);
  },

// mutation
  // user
  createUser: (input: UserCreateInput) => {
    return userService.createUser(input);
  },
  deleteUser: (idInput: idInput) => {
    return userService.deleteUser(idInput.id);
  },

  // post
  createPost: (input: PostCreateInput) => {
    return postService.createPost(input);
  },
  deletePost: (idInput: idInput) => {
    return postService.deletePost(idInput.id);
  },

  // comment
  createComment: (input: CommentCreateInput) => {
    return commentService.createComment(input);
  },
  deleteComment: (idInput: idInput) => {
    return commentService.deleteComment(idInput.id);
  },
}