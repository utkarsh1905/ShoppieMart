import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LimitProductList from "../../../LimitProductList";
import SortProducts from "../../../components/SortProducts";

function ProductList() {
  const { products: initialProducts } = useLoaderData();
  const [products, setProducts] = useState(initialProducts);

  return (
    <div>
      <SortProducts setProducts={setProducts} />
      <LimitProductList products={products} />
    </div>
  );
}

export default ProductList;
