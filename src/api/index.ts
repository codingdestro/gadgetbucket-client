import axios from "axios";
import products from "./products";
import cart from "./cart";
import auth from "./auth";
import orders from "./orders";

axios.defaults.baseURL = import.meta.env.API_URL || "http://127.0.0.1:5000/api/v1/";
const api = {
  products,
  cart,
  orders,
  auth,

  async validateProduct(id: string) {
    const { data } = await axios.post("/validate/product/id", { id });
    return data;
  },

  async tokenAuth(token: string) {
    const { status, data } = await axios.post(
      "auth/auth",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status, data };
  },
};

export default api;
