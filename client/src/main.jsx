import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Error from './pages/error.jsx';
import LandingPage from './pages/landingPage.jsx';
import DashBoard from './pages/dashBoard.jsx';


//adding a comment here to fix the main jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/DashBoard',
        element: <DashBoard />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
