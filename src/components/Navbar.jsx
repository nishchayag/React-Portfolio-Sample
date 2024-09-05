import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { navItems } from "../constants/constants";
import "../components/Nav.css";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mobileDrawer, SetMobileDrawer] = useState(false);

  const navTog = () => {
    SetMobileDrawer(!mobileDrawer);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed  w-full transition-transform duration-300 transform ${
        show ? "translate-y-0" : "-translate-y-full"
      } flex flex-col`}
    >
      <div className=" w-screen h-fit flex justify-between lg:px-8 backdrop-blur-sm">
        <div className=" py-5 w-fit ml-5">
          <a href="#">
            <img src={Logo} alt="Logo" className="lg:w-44 w-40 " />
          </a>
        </div>
        <div className=" hidden relative px-12 lg:flex text-[18px] ">
          {navItems.map((item, index) => (
            <div className="m-5">
              <a href={item.href} className="hover:text-blue-600 anchor-points">
                {item.label}
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center mr-5 lg:hidden">
          <button onClick={navTog}>{mobileDrawer ? <X /> : <Menu />}</button>
        </div>
      </div>
      {mobileDrawer && (
        <div className="flex flex-col backdrop-blur-xl lg:hidden bg-black ">
          {navItems.map((item, index) => (
            <div className=" w-screen flex justify-center my-2">
              <a href={item.href}>{item.label}</a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
