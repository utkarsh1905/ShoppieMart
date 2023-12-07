import axios from "axios";

export const loader = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const { data } = response;
    return { products: data };
  } catch (error) {
    throw new Error(error);
  }
};
