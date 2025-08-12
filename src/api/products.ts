import axios from "axios";
const products = {
  async fetch(page = 1, limit = 1) {
    const {data} = await axios.get(`/products/?page=${page}&limit=${limit}`);
    return data.products;
  },

  async fetchById(id: string) {
    const { data } = await axios.get(`/products/id/?id=${id}`);
    return data.product;
  },
};

export default products;
