import Signin from './components/Signin';
import Header from './components/Header';
import Dashboard from './routes/Dashboard';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin />,
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