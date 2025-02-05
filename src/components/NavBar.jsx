import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  const Nav = [
    {
      id: 1,
      name: "Home",
      link: "/",
      active: true,
    },
    {
      id: 2,
      name: "Service",
      link: "/service",
      active: false,
    },
    {
      id: 3,
      name: "Why Us",
      link: "/why-us",
      active: false,
    },
    {
      id: 4,
      name: "Testimonial",
      link: "/testimonial",
      active: false,
    },
    {
      id: 5,
      name: "FAQ",
      link: "/faq",
      active: false,
    },
    {
      id: 6,
      name: " About",
      link: "/about",
      active: false,
    },
  ];
  return (
    <header className="container mb-4 sticky top-0 left-0 right-0">
      <nav className="flex justify-between items-center bg-white shadow-lg p-5 rounded-lg">
        <a className="text-xl font-semibold sm:text-lg text-nowrap" href="#">
          My Web
        </a>

        <ul className=" hidden md:flex gap-9 text-xs lg:text-sm ">
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
        </ul>

        <div className="flex items-center gap-2">
          <button className="bg-gray-300 text-xs sm:text-sm px-4 py-1 hover:bg-gray-500 rounded-full text-nowrap">
            Login
          </button>
          <button className="bg-green-500 text-xs sm:text-sm px-4 py-1 hover:bg-green-700 rounded-full text-nowrap">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
