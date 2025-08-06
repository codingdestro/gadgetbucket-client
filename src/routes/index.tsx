import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Account from "../pages/accounts";
import Navbar from "../components/header/Navbar";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import TokenLoader from "./loaders/tokenLoader";
import Home from "../pages/home";
import Signin from "../pages/accounts/Signin";
import Login from "../pages/accounts/Login";
import Cart from "../pages/Cart";
import MakeOrder from "../pages/MakeOrder";
import Order from "../pages/Order";
import Products from "../pages/products";
import About from "../pages/About";
import Contact from "../pages/Contact";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Navbar />}>
        <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
      </Route>
      <Route loader={TokenLoader} element={<PrivateRoute />}>
        <Route element={<Navbar />}>
          <Route path="" element={<Home />} />
          <Route path="make/order/:Id" element={<MakeOrder />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Route>
      <Route path="/account" loader={TokenLoader} element={<Account />}>
        <Route path="signin" Component={Signin} />
        <Route path="login" Component={Login} />
      </Route>
      <Route
        path="*"
        element={<Error message="sorry page not found!" />}
      ></Route>
    </Route>
  )
);

export default route;
