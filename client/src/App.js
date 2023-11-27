import React from "react";
import Header from "./components/ui/Header";
import getRoutes from "./utils/getRoutes";
import { publicRoutes } from "./routes";
import { Redirect, Switch } from "react-router-dom";
import AuthProvider from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/common/ProtectedRoute";
import CreatePost from "./components/pages/CreatePost";
import MyPosts from "./components/pages/MyPosts";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <AuthProvider>
      <ToastContainer className="z-[9999]" />
      <div className="App bg-[#F2F4F3] min-h-[100dvh] flex flex-col">
        <Header />
        <div className="mx-auto w-full h-full max-w-screen-xl px-8 flex justify-center">
          <Switch>
            <ProtectedRoute path="/create_post" component={CreatePost} />
            <ProtectedRoute path="/settings" component={Settings} />
            <ProtectedRoute path="/my_posts" component={MyPosts} />
            {getRoutes(publicRoutes)}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
