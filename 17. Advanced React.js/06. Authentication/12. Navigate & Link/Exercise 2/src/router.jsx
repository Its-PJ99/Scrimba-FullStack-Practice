import Signin from './components/Signin';
import Signup from './components/Signup';
import Header from './components/Header';
import Dashboard from './routes/Dashboard';
import { createBrowserRouter } from 'react-router-dom';

/**
Challenge:
* 1) Create a new route with path '/signup'
* 2) Set the element as the 'Signup.jsx' component
* 3) Save and test your path by navigating to '/signup'
*/

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Header />
        <Dashboard />
      </>
    ),
  },
]);