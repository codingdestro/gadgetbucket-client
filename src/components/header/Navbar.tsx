import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer";
import LoginButton from "./LoginButton";

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="text-text-body hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev: boolean) => !prev);

  return (
    <>
      <nav className="bg-bg-default border-b border-border-light sticky top-0 z-50 shadow-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                GadgetBucket
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="ml-10 flex-1 flex items-baseline justify-around">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/order">Order</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
              <LoginButton />
            </div>

            {/* Desktop Action Buttons */}
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleShow}
                className="inline-flex items-center justify-center p-2 rounded-md text-text-body hover:text-primary hover:bg-bg-secondary focus:outline-none transition-colors"
              >
                <svg
                  className={`${show ? "hidden" : "block"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${show ? "block" : "hidden"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          data-active={show}
          className="h-0 overflow-hidden md:hidden data-[active=true]:h-[80vh] transition-all opacity-0 data-[active=true]:opacity-100  duration-500 w-full z-10 absolute bg-white border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-bg-secondary border-t border-border-light animate-popup">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-text-body hover:text-primary hover:bg-bg-default transition-colors rounded-md"
              onClick={() => setShow(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-base font-medium text-text-body hover:text-primary hover:bg-bg-default transition-colors rounded-md"
              onClick={() => setShow(false)}
            >
              Products
            </Link>
            <Link
              to="/order"
              className="block px-3 py-2 text-base font-medium text-text-body hover:text-primary hover:bg-bg-default transition-colors rounded-md"
              onClick={() => setShow(false)}
            >
              Order
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-base font-medium text-text-body hover:text-primary hover:bg-bg-default transition-colors rounded-md"
              onClick={() => setShow(false)}
            >
              Cart
            </Link>
            <Link
              to="/categories"
              className="block px-3 py-2 text-base font-medium text-text-body hover:text-primary hover:bg-bg-default transition-colors rounded-md"
              onClick={() => setShow(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-text-body hover:text-primary hover:bg-bg-default transition-colors rounded-md"
              onClick={() => setShow(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-text-body hover:text-primary hover:bg-bg-default transition-colors rounded-md"
              onClick={() => setShow(false)}
            >
              Contact
            </Link>
            {/* <div className="flex items-center space-x-3 px-3 py-2">
              <Link
                to="/account/login"
                className="flex items-center justify-center gap-4 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors click flex-1 text-center"
                onClick={() => setShow(false)}
              >
                <LogIn className="w-5 h-5" />
                Login
              </Link>
            </div> */}
            <LoginButton />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto ">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
