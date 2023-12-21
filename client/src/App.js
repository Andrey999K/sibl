import React from "react";
import getRoutes from "./utils/getRoutes";
import { publicRoutes } from "./routes";
import { Redirect, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/common/ProtectedRoute";
import CreatePost from "./components/pages/CreatePost";
import MyPosts from "./components/pages/MyPosts";
import Settings from "./components/pages/Settings";
import AppLoader from "./hoc/AppLoader";

// /ewfewfewfew
function App() {
  return (
    <AppLoader>
      <Switch>
        <ProtectedRoute path="/create_post" component={CreatePost} />
        <ProtectedRoute path="/settings" component={Settings} />
        <ProtectedRoute path="/my_posts" component={MyPosts} />
        {getRoutes(publicRoutes)}
        <Redirect to="/" />
      </Switch>
    </AppLoader>
  );
}

export default App;
