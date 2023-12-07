import { useState } from "react";
import PropTypes from "prop-types";

function SortProducts({ setProducts }) {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortClick = async () => {
    const sortParam = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(sortParam);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products?sort=${sortParam}`
      );
      if (!res.ok) return;
      const json = await res.json();
      console.log(json);
      setProducts(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="m-4 rounded-md btn btn-sm btn-primary"
      onClick={handleSortClick}
    >
      {sortOrder === "asc"
        ? "Sort Products Ascending"
        : "Sort Products Descending"}
    </button>
  );
}

SortProducts.propTypes = {
  setProducts: PropTypes.func.isRequired,
};

export default SortProducts;
