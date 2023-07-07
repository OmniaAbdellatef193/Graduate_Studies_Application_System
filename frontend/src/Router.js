import {
  createBrowserRouter,
} from "react-router-dom";

import App from './App.jsx'
import Form from './components/Form/Form.jsx'
import Login from './components/Login/Login .jsx'
import Content from "./components/Content/Content.jsx";
import Profile from "./components/student/Profile.jsx";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Content />
      },
      {
        path: "/form",
        element: <Form />,
        
      },
      {
        path: "/login",
        element: <Login />,
        
      },
      {
        path: "/profile",
        element: <Profile />,
        
      },
    ]
  },

]);

export default Router

