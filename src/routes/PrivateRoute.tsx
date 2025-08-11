import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import useProducts from "../store/useProducts";
import { useEffect } from "react";

const PrivateRoute = () => {
  const fetchProducts = useProducts((state) => state.fetch);

  useEffect(() => {
    fetchProducts();
  }, []); //eslint-disable-line
  const isAuthenticated = useLoaderData();
  return (
    <>
      {isAuthenticated ? <Outlet /> : <Navigate to={"/account/signin"} />}
    </>
  );
};

export default PrivateRoute;
