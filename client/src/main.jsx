import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Error from './pages/error.jsx';
import LandingPage from './pages/landingPage.jsx';
import DashBoard from './pages/dashBoard.jsx';
import Exercises from './pages/exercise.jsx';

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
      {
        path: '/exercises',
        element: <Exercises />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
