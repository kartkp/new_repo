import './App.css'

import Home from './components/Home';
import Notes from './components/Notes';
import Quiz from './components/Quiz';
import Task from './components/Task';
import Response from './components/Response';
import Navbar from './components/Navbar';
import Quizpage from './components/Quizpage';
import Resultpage from './components/Resultpage';




import { createBrowserRouter, RouterProvider } from 'react-router-dom'




function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Home /></>
    },
    {
    path: "/",
    element: <><Home /></>

  },
    // {
    //   path: "/score",
    //   element: <><Navbar /></>
    // },


    {
      path: "/response",
      element: <><Navbar /><Response/></>
    },
    {
      path: "/Resultpage",
      element: <><Navbar /><Resultpage/></>
    },
    {
      path: "/quizpage",
      element: <><Navbar /><Quizpage/></>
    },



    {
      path: "/enhancer",
      element: <><Navbar/><Notes /></>
    },

    {
      path: "/quiz",
      element: <><Navbar/><Quiz /></>
    },

    {
      path: "/task",
      element: <><Navbar/><Task /></>
    },

    // {
    //   path: "/Resultpage",
    //   element: <>
    //     <Navbar /><Resultpage />
    //   </>
    // }
  ])
  return (

    <>
      <RouterProvider router={router} />
      {/* <FeatureSection /> */}
      </>


  )
}

export default App

// import React from 'react';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );
// }

// export default App;