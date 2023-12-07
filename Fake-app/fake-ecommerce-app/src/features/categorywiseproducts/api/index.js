import axios from "axios";

export const fetchCategoryProducts = async ({ params }) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${params?.category}`
    );
    const { data } = response;
    console.log(response);
    console.log(data);
    return { products: data };
  } catch (error) {
    throw new Error();
  }
};
