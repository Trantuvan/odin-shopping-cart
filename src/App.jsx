import { createHashRouter, RouterProvider } from 'react-router-dom';

import { RootLayout } from './layouts';
import { ErrorPage, FourZeroFourPage, HomePage, NoMatchPage, ProductPage } from './pages';
import { loader as productLoader } from './pages/ProductPage';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <FourZeroFourPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'products', element: <ProductPage />, loader: productLoader },
          { path: '*', element: <NoMatchPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
