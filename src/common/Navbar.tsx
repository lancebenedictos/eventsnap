import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navClose = () => {
    setNavbarOpen(false);
  };
  return (
    <>
      <nav className="bg-white py-2 shadow-md sticky top-0 w-full right-0 h-14 ">
        <div className="w-[90%] mx-auto flex items-center">
          <Logo withText />

          <span className="gap-6 left-1/2 absolute -translate-x-1/2 hidden md:flex">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </span>

          <span className="hidden md:flex gap-6 ml-auto items-center">
            <Link to="/signup">SIGNUP</Link>
            <Link
              to="/login"
              className=" bg-cta text-white px-6 py-2 rounded-sm shadow-sm"
            >
              LOGIN
            </Link>
          </span>

          <button
            className="ml-auto hamburger text-2xl md:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {navbarOpen && (
          <div className="menu">
            <Link to="/" onClick={navClose}>
              HOME
            </Link>
            <Link to="/about" onClick={navClose}>
              ABOUT
            </Link>
            <Link to="/contact" onClick={navClose}>
              CONTACT
            </Link>
            <Link to="/signup" onClick={navClose}>
              SIGNUP
            </Link>
            <Link to="/login" onClick={navClose}>
              LOGIN
            </Link>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
