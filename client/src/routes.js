import React from "react";

const Homepage = React.lazy(() => import("./components/pages/Homepage"));
const Registration = React.lazy(() => import("./components/pages/Registration"));
const Login = React.lazy(() => import("./components/pages/Login"));
const CreatePost = React.lazy(() => import("./components/pages/CreatePost"));
const UserPage = React.lazy(() => import("./components/pages/UserPage"));
const MyPosts = React.lazy(() => import("./components/pages/MyPosts"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const PostPage = React.lazy(() => import("./components/pages/PostPage"));

export const publicRoutes = [
  { path: "/registration", component: Registration },
  { path: "/login", component: Login },
  { path: "/post/:postId", component: PostPage },
  { path: "/my_posts", component: MyPosts },
  { path: "/user/:userId", component: UserPage },
  { path: "/", component: Homepage },
  { path: "", component: NotFound }
];

export const protectedRoutes = [
  { path: "/create_post", component: CreatePost }
];
