import { Navigate, useLoaderData, Outlet } from "react-router";
const Index = () => {
  const isAuthenticated = useLoaderData();

  return isAuthenticated ? (
    <Navigate to={"/"} />
  ) : (
    <div className="w-full h-svh flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default Index;
