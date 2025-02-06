import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Quiz from "./components/Quiz";
import Task from "./components/Task";
import Response from "./components/Response";
import Quizpage from "./components/Quizpage";
import Resultpage from "./components/Resultpage";
import Grammer from "./components/Grammer";
import Grammerscore from "./components/Grammerscore";
import Layout from "./components/Layout";
import Aboutus from "./components/Aboutus";
import Features from "./components/Features";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/response", element: <Response /> },
        { path: "/Resultpage", element: <Resultpage /> },
        { path: "/quizpage", element: <Quizpage /> },
        { path: "/enhancer", element: <Notes /> },
        { path: "/quiz", element: <Quiz /> },
        { path: "/task", element: <Task /> },
        { path: "/grammer", element: <Grammer /> },
        { path: "/grammerresponse", element: <Grammerscore /> },
        { path: "/about", element: <Aboutus /> },
        { path: "/features", element: <Features /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
