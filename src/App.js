import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";

 const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage/>,
      errorElement:<ErrorPage/>,
      children:[
        {path:'/', element:<HomePage/>},
        {path:'/cart', element:<CartPage/>},
        {path:'/products', element:<ProductsPage/>},
        {path:'/products/:productId', element:<ProductPage/>},
      ],
    },
  ]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
