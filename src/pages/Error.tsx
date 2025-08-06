import { Link } from "react-router-dom";

type Props = {
  message?: string;
};
const Error = ({ message }: Props) => {
  return (
    <div className="absolute w-full px-5 top-[40%] left-[50%] translate-x-[-50%] text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          {message || "Page Not Found"}
        </h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to={"/"}
          className="bg-primary/80 hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
