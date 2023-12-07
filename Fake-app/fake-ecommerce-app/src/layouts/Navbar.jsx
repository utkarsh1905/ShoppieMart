import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const cartItemsLength = cartItems.length;
  // console.log(cartItemsLength);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    navigate(`/product/category/${category}`);
  };

  const onSelectCategory = (category) => {
    // Handle category selection logic here
    console.log("Selected category:", category);
  };

  const handleHomeClick = () => {
    navigate(`/products`);
  };

  const handleCartClick = () => {
    navigate(`/products/cart`);
  };

  const [categories, setCategories] = useState([]);
  return (
    <>
      <div className="relative z-10 navbar bg-base-100 drop-shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={handleHomeClick}>Home</a>
              </li>
              <li>
                <a>Catogories</a>
                <ul className="p-2">
                  {/* //TODO : find out list in whole app and make components for that */}
                  {categories.map((category) => (
                    <li key={category}>
                      <a onClick={() => handleCategoryClick(category)}>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a>About-us</a>
              </li>
            </ul>
          </div>
          <h5 className="text-xl cursor-pointer text-accent ">
            Shoppie<span className="text-info-content">Mart</span>
          </h5>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a onClick={handleHomeClick}>Home</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Catogories</summary>
                <ul className="p-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <a onClick={() => handleCategoryClick(category)}>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <a>About-us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="w-24 input input-bordered md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                {/* //TODO : Make Separate components for each svg   */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartItemsLength}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {cartItemsLength} Items
                </span>
                <div className="card-actions">
                  <button
                    className="btn btn-accent btn-block"
                    onClick={handleCartClick}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
