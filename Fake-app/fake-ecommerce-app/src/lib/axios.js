import Axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const axios = Axios.create({
  baseURL: BASE_URL,
});
