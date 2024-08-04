import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link
}from 'react-router-dom';

import IdeaGen from "./Pages/User/Features/IdeaGen";
import AppLayout from './AppLayout/AppLayout';
import Error_500 from "./Pages/Error/Error_500/Error_500";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Info from "./Pages/Info/Info";
import Error_404 from "./Pages/Error/Error_404/Error_404";
import User from "./Pages/User/User";
// router and routes
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error_500 />,

    children: [
      {
        path: "/",
        index: true,
        element: <Info />,
      },
      {
        path: "/user",
        element: <User />,
        children:[
          {
            path: "/user/ideagen",
            index: true,
            element: <IdeaGen/>,
          },
          {
            path: "/user/keywordgen",
            element:<IdeaGen/>
          },
          {
            path: "/user/thumbnailgen",
            element: <IdeaGen/>
          },
          {
            path: "/user/scriptgen",
            element: <IdeaGen/>
          },
          {
            path: "/user/topaitools",
            element: <IdeaGen/>
          },
        ]
      },
      {
        path: "*",
        element: <Error_404 />
      },
    ]
  }
]

)

function App() {
  return (
    <RouterProvider router={router} />
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);