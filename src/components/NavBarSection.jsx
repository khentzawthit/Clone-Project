import React from "react";
import useNavStore from "../store/useNaveStore";
import { Link } from "react-router";

const NavBarSection = ({ nav: { id, name, active, link } }) => {
  const { activeCategory } = useNavStore();
  const activeNavBarHandler = () => {
    activeCategory(id);
  };
  return (
    <div>
      <Link
        to={link}
        onClick={activeNavBarHandler}
        className={`hover:underline underline-offset-4 hover:text-green-500 ${
          active && "underline-offset-4 underline text-green-500"
        }`}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavBarSection;
