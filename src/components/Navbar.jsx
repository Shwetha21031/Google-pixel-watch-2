import React from "react";
import { content } from "../constants/content";
import GoogleLogo from "../assets/images/Google-pixel-logo.png";

const Navbar = () => {
  const { navbar } = content;
  return (
    <header className="w-full ">
      <nav className="h-[10vh] flex justify-between items-center">
        <div className="ml-10 w-[100px]">
          <a href="/">
            <img src={GoogleLogo} alt="" width={100} />
          </a>
        </div>
        <ul className="flex justify-between items-center w-[40%] mr-[30px] max-md:hidden">
          {navbar.map((nav, index) => {
            return (
              <li key={index} className="">
                <a href={nav.link}>{nav.element}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
