import axios from "axios";

export const fetchProductDetail = async (params) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${params?.params?.productId}`
    );
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
