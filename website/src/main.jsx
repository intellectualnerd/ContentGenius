import ReactDOM from "react-dom/client";

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
  Link
} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./main.css";
import Info from "./Pages/Info/Info";
import Error_404 from "./Pages/Error/Error_404/Error_404";

// router and routes
const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route >
      <Route index path="/" element={<Info />} />
      <Route path="*" element={<Error_404 />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);