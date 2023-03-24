import { createHashRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import { ErrorPage, FourZeroFourPage, NoMatchPage } from './pages';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <FourZeroFourPage />,
        children: [{ path: '*', element: <NoMatchPage /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
