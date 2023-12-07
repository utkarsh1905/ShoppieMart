import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../reducer/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => {
    const cartItem = state.cart.find((cartItem) => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 1;
  });

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncrement = () => {
    if (quantity < 5) {
      dispatch(incrementQuantity(item.id));
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };

  return (
    <div
      className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100"
      key={item.id}
    >
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={item.image} alt="" />
        </div>
        <div className="flex flex-col justify-between flex-grow ml-4">
          <span className="text-sm font-bold">{item.title}</span>
          <a
            href="#"
            className="text-xs font-semibold text-gray-500 hover:text-red-500"
            onClick={handleRemoveFromCart}
          >
            Remove
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          className="w-3 text-gray-600 cursor-pointer fill-current"
          viewBox="0 0 448 512"
          onClick={handleDecrement}
          disabled={quantity === 1}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <input
          className="w-8 mx-2 text-center border"
          min="1"
          max="5"
          value={quantity}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value);
            if (newQuantity >= 1 && newQuantity <= 5) {
              if (newQuantity > quantity) {
                dispatch(incrementQuantity(item.id));
              } else if (newQuantity < quantity) {
                dispatch(decrementQuantity(item.id));
              }
            }
          }}
        />
        <svg
          className="w-3 text-gray-600 cursor-pointer fill-current"
          viewBox="0 0 448 512"
          onClick={handleIncrement}
          disabled={quantity === 5}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>{" "}
      </div>
      <span className="w-1/5 text-sm font-semibold text-center">
        {`$${item.price.toFixed(2)}`}
      </span>
      <span className="w-1/5 text-sm font-semibold text-center">
        {`$${item.price * quantity}`}
      </span>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
