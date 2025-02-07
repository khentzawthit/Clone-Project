import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";
import useNavStore from "../store/useNaveStore";
import NavBarSection from "./NavBarSection";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { Nav } = useNavStore();
  // console.log(Nav);

  const navbarHandler = () => {
    setOpen(!open);
  };

  // const Nav = [
  //   {
  //     id: 1,
  //     name: "Home",
  //     link: "/",
  //     active: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Service",
  //     link: "/service",
  //     active: false,
  //   },
  //   // {
  //   //   id: 3,
  //   //   name: "Why Us",
  //   //   link: "/why-us",
  //   //   active: false,
  //   // },
  //   // {
  //   //   id: 4,
  //   //   name: "Testimonial",
  //   //   link: "/testimonial",
  //   //   active: false,
  //   // },
  //   {
  //     id: 5,
  //     name: "FAQ",
  //     link: "/faq",
  //     active: false,
  //   },
  //   {
  //     id: 6,
  //     name: " About",
  //     link: "/about",
  //     active: false,
  //   },
  // ];
  return (
    <header className="container mb-4 sticky top-0 left-0 right-0  ">
      <nav className="flex justify-between items-center bg-white shadow-lg p-5 rounded-lg">
        <a className="text-xl font-semibold sm:text-lg text-nowrap" href="#">
          My Web
        </a>

        <ul className=" hidden md:flex gap-9 text-xs lg:text-sm  ">
          <li className="md:flex space-x-10 items-center justify-center ">
            {Nav.map((nav) => (
              <NavBarSection key={nav.id} nav={nav} />
            ))}
          </li>
        </ul>

        <div className={` md:flex items-center gap-2 hidden`}>
          <button className="bg-gray-300 text-xs sm:text-sm px-4 py-1 hover:bg-gray-500 rounded-full text-nowrap">
            Login
          </button>
          <button className="bg-green-500 text-white text-xs sm:text-sm px-4 py-1 hover:bg-green-700 rounded-full text-nowrap">
            Sign Up
          </button>
        </div>
        {open ? (
          <HiX className=" md:hidden size-7 " onClick={navbarHandler} />
        ) : (
          <HiMenu className=" md:hidden size-7 " onClick={navbarHandler} />
        )}
        {/* <HiMenu className="md:hidden size-7" onClick={navbarHandler} /> */}
      </nav>

      <div className={` relative w-full ${open ? "" : "hidden"}`}>
        <ul className=" bg-white block absolute right-0 left-0 text-center space-y-4 p-2">
          {Nav.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className={`hover:underline underline-offset-4 hover:text-green-500 `}
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <div className="flex flex-col items-center gap-4">
            <button className="bg-gray-300 text-xs sm:text-sm px-6 py-1 hover:bg-gray-500 rounded-full text-nowrap">
              Login
            </button>
            <button className="bg-green-500 text-white text-xs sm:text-sm px-4 py-1 hover:bg-green-700 rounded-full text-nowrap">
              Sign Up
            </button>
          </div>
        </ul>
        {/* <div className="space-x-5 fixed top-[230px] right-0 left-0 text-center">
          <button className="bg-gray-300 text-xs sm:text-sm px-4 py-1 hover:bg-gray-500 rounded-full text-nowrap">
            Login
          </button>
          <button className="bg-green-500 text-white text-xs sm:text-sm px-4 py-1 hover:bg-green-700 rounded-full text-nowrap">
            Sign Up
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default NavBar;
