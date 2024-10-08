import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Error from './pages/Error.jsx';
import LandingPage from './pages/LandingPage.jsx';
import DashBoard from './pages/DashBoard.jsx';
import Exercises from './pages/exercise.jsx';
import SingleExercise from './pages/singleExercise.jsx';
import Auth from './pages/auth.jsx';
import WorkoutPage from './pages/WorkoutPage.jsx';


//adding a comment here to fix the main jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/Home" replace />,
      },
      {
        path: '/Home',
        element: <LandingPage />,
      },
      {
        path: '/Dashboard',
        element: <DashBoard />,
      },
      {
        path: '/exercises',
        element: <Exercises />
      },
      {
        path: '/exercises/:id',
        element: <SingleExercise />
      },
      {
        path: '/login',
        element: <Auth />
      },
      {
        path: '/workouts',
        element: <WorkoutPage />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
