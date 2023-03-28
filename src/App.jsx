import { createHashRouter, RouterProvider } from 'react-router-dom';

import { RootLayout } from './layouts';
import { ErrorPage, ProductDetail, FourZeroFourPage, HomePage, NoMatchPage, ProductPage } from './pages';
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
          {
            path: 'products',
            element: <ProductPage />,
            loader: productLoader,
          },
          { path: 'products/:productId', element: <ProductDetail /> },
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
