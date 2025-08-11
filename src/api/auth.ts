import axios from "axios";
import { userSigninData } from "../types/userTypes";
const auth = {
  async signin(user: userSigninData) {
    const res = await axios.post("/auth/register", { ...user });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  },
  async login(user: { password: string; email: string }) {
    const res = await axios.post("/auth/login", { ...user });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  },
};

export default auth;
