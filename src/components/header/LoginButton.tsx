import { Link, useLoaderData } from "react-router-dom";
import { LogIn, LogOutIcon } from "lucide-react";

const LoginButton = () => {
  const isAuthenticated = useLoaderData();
  return (
    <div className="flex items-center">
      {!isAuthenticated ? (
        <Link
          to="/account/login"
          className="bg-primary rounded-lg text-white px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors click flex items-center justify-center gap-4"
        >
          <LogIn className="w-5 h-5" />
          Login
        </Link>
      ) : (
        <button
          onClick={() => localStorage.clear()}
          className="cursor-pointer text-white bg-red-400 rounded-2xl px-4 py-2 flex items-center gap-1"
        >
          <LogOutIcon />
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginButton;
