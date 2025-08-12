import axios from "axios";

const cart = {
  async get() {
    const token = localStorage.getItem("token");
    if (!token) throw "No token found";
    const { data } = await axios.get("/carts/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
  async delete(cartId: string) {
    const token = localStorage.getItem("token");
    if (!token) throw "No token found";
    const res = await axios.delete("/carts/remove", {
      data: {
        cartId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  },

  async add(productId: string, quantity: number) {
    const token = localStorage.getItem("token");
    if (!token) throw "No token found";
    const { data } = await axios.post(
      "/carts/add",
      {
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },

  async order(token: string, address: string, contact: string) {
    const { data } = await axios.post("/carts/checkout", {
      token,
      address,
      contact,
    });
    return data;
  },
};

export default cart;
