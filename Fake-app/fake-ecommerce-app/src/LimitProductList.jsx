import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./components/Rating";
import Paginator from "./components/Paginator";
import Toast from "./components/Toast";
import { addToCart } from "./reducer/cartSlice";
import { useDispatch } from "react-redux";

function LimitProductList({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (product) => {
    setShowToast(true);
    dispatch(addToCart(product));
    setTimeout(() => {
      setShowToast(false);
    }, 500);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleProducts = products.slice(startIndex, endIndex);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="absolute z-0 flex flex-col justify-center w-full p-4 align-center">
      {showToast && <Toast type="success" message="Item added to the cart" />}
      <div className="grid grid-cols-1 gap-4 shadow sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {visibleProducts.map((product) => (
          <div
            className="border rounded-lg bg-base-200 w-80 card"
            key={product.id}
          >
            <figure>
              <img
                className="object-cover w-80 h-60"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="flex flex-col justify-between card-body ">
              <a href="#">
                <h5 className="font-medium text-info-content text-m card-title">
                  {product.title}
                </h5>
              </a>
              <div>
                <div className="flex w-32 gap-10 align-center">
                  <div className="flex">
                    <p className="text-sm font-bold text-info-content">
                      Rating:{" "}
                    </p>
                    <Rating rate={product.rating.rate} />
                  </div>

                  <a
                    onClick={() => handleProductClick(product.id)}
                    className="text-xs font-semibold text-gray-500 cursor-pointer hover:text-accent"
                  >
                    {" "}
                    Details
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-info-content">
                  Price: ${product.price}
                </span>
                <button
                  className="btn btn-sm btn-outline btn-accent"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Paginator
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / pageSize)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

LimitProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
      }).isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LimitProductList;
