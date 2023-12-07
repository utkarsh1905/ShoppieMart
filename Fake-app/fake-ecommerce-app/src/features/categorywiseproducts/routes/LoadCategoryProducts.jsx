/*
!// TODO : import order in pages
1. React Related Imports like react and react-router-dom
2. Redux  Related Imports
3. Hooks
4. Layouts
5. Components
6. Utility Functions
*/

import { useLoaderData } from "react-router-dom";
import LimitProductList from "../../../LimitProductList";

function LoadCategoryProducts() {
  const { products } = useLoaderData();

  return (
    <>
      <LimitProductList products={products} />
    </>
  );
}

export default LoadCategoryProducts;
