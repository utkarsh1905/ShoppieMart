import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import ProductList from "./features/showproducts/routes/ProductList";
import { loader as fetchProductList } from "./features/showproducts/api";
import Description from "./features/PoductDescription/routes/Description";
import { fetchProductDetail } from "./features/PoductDescription/api";
import Login from "./features/auth/routes/Login";
import LoadCategoryProducts from "./features/categorywiseproducts/routes/LoadCategoryProducts";
import { fetchCategoryProducts } from "./features/categorywiseproducts/api";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
import DashboardLayout from "./layouts";
import Cart from "./components/Cart";
/* 
  !//TODO: Maintain Import order
  1. Insert router first
  2. Import CSS
  3. Hooks
  4. Import Components
*/

// TODO : Make Different Folder and File for routes according to Bulletproof react
const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Navigate to="/auth/login" replace={true} />,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/products",
    loader: fetchProductList,
    element: (
      <DashboardLayout>
        <ProductList />
      </DashboardLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:productId",
    loader: fetchProductDetail,
    element: (
      <DashboardLayout>
        <Description />
      </DashboardLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/category/:category",
    loader: fetchCategoryProducts,
    element: (
      <DashboardLayout>
        <LoadCategoryProducts />
      </DashboardLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/cart",
    element: (
      <DashboardLayout>
        <Cart />
      </DashboardLayout>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  );
}

export default App;
