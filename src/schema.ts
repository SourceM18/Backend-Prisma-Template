import { buildSchema} from "graphql";

export const schema = buildSchema(`
schema {
    query: Query
    mutation: Mutation
}

type Mutation {
    createUser(data: UserCreateInput!): User
    deleteUser(id: Int!): User

    createPost(data: PostCreateInput!): Post
    deletePost(id: Int!): Post

    createComment(data: CommentCreateInput!): Comment
    deleteComment(id: Int!): Comment

}

type Query {
    getAllUsers: [User!]!
    getUserById(id: Int): User

    getAllPosts: [Post!]!
    getPostById(id: Int): Post

    getAllComments: [Comment!]!
    getCommentsById(id: Int): Comment
}
type Post {
    id:       Int
    title:     String
    content:   String
    published: Boolean
    comments:  [Comment!]!
    createdAt: DateTime
    updatedAt: DateTime
}

type User {
    id:      Int
    email:   String
    name:    String
    comments:   [Comment!]!
}

type Comment {
    id:      Int
    textComment: String
    user:    User
    userId:  Int
    post:    Post
    postId:  Int
}

input PostInput {
    id:       Int
    title:     String
    content:   String
    published: Boolean
    comments:  [CommentInput!]!
    createdAt: DateTime
    updatedAt: DateTime
}

input UserInput {
    id:      Int
    email:   String
    name:    String
    comments:   [CommentInput!]!
}

input CommentInput {
    id:      Int
    textComment: String
    user:    UserInput
    userId:  Int
    post:    PostInput
    postId:  Int
}

input UserCreateInput {
    email: String!
    name: String!
}

input PostCreateInput {
    content: String
    title: String!
}

input CommentCreateInput {
    textComment: String
    userId: Int
    postId: Int
}
scalar DateTime
`);