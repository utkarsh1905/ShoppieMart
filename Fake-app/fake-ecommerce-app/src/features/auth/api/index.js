import { axios } from "../../../lib/axios";

export const login = async () => {
  try {
    const res = await axios.post(`/login`);
  } catch (error) {
    console.log("🚀 ~ file: index.js:7 ~ login ~ error:", error);
  }
};
