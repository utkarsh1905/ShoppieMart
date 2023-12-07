import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price;
      const quantity = item.quantity;
      return total + price * quantity;
    }, 0);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex my-10 shadow-md">
          <div className="w-3/4 px-10 py-10 bg-white">
            <div className="flex justify-between pb-8 border-b">
              <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              <h2 className="text-2xl font-semibold">
                {cartItems.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="w-2/5 text-xs font-semibold text-gray-600 uppercase">
                Product Details
              </h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
                Quantity
              </h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
                Price
              </h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
                Total
              </h3>
            </div>

            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}

            <a
              href="#"
              className="flex mt-10 text-sm font-semibold text-indigo-600"
            >
              <svg
                className="w-4 mr-2 text-indigo-600 fill-current"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="pb-8 text-2xl font-semibold border-b">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="text-sm font-semibold uppercase">
                Items {cartItems.length}
              </span>
              <span className="text-sm font-semibold">{`$${getTotalCost()}`}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="inline-block mb-3 text-sm font-semibold uppercase">
                Promo Code:
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="w-full p-2 text-sm"
              />
              <button className="w-20 px-5 py-2 text-sm text-white uppercase bg-error hover:bg-red-600">
                Apply
              </button>
            </div>
            <div className="mt-8 border-t">
              <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                <span>Total cost</span>
                <span>{`$${getTotalCost()}`}</span>
              </div>
              <button className="px-4 py-2 mt-5 text-sm font-semibold text-white uppercase rounded btn bg-primary hover:bg-primary-focus">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
