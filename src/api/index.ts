import axios from "axios";
import products from "./products";
import cart from "./cart";
import sign from "./signin";
import orders from "./orders";

axios.defaults.baseURL = import.meta.env.API_URL || "http://127.0.0.1:5000/";
const api = {
  products,
  cart,
  orders,
  sign,

  async validateProduct(id: string) {
    const { data } = await axios.post("/validate/product/id", { id });
    return data;
  },

  async tokenAuth(token: string) {
    const { status, data } = await axios.post("account/authenticate", {
      token,
    });
    return { status, data };
  },
};

export default api;
