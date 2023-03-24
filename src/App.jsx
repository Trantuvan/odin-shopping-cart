import { createHashRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>something wrong</div>,
    // children: [
    //   {
    //     errorElement: <div>sth wrong</div>,
    //     children: [
    //       { index: true, element: <HomePage /> },
    //       {
    //         path: "products",
    //         element: <ProductsPage />,
    //         loader: productLoader,
    //       },
    //       { path: "*", element: <NoMatchPage /> },
    //     ],
    //   },
    // ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
