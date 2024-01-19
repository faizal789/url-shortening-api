import React, { FunctionComponent } from "react";
import MobileMenu from "../components/MobileMenu";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  return (
    <header className="py-10 px-24 max-sm:px-8">
      <nav className="flex justify-between items-center">
        <div className="flex gap-7 items-center">
          <img src="images/logo.svg" alt="logo" />
          <ul className="flex gap-5 max-lg:hidden">
            <li className="hover:text-very-dark-violet-neutral transition-colors duration-300 cursor-pointer">
              Features
            </li>
            <li className="hover:text-very-dark-violet-neutral transition-colors duration-300 cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-very-dark-violet-neutral transition-colors duration-300 cursor-pointer">
              Resources
            </li>
          </ul>
        </div>
        <div className="max-lg:hidden">
          <ul className="flex items-center gap-5">
            <li className="hover:text-very-dark-violet-neutral transition-colors duration-300 cursor-pointer">
              Login
            </li>
            <li className="bg-cyan-primary px-5 py-2 text-white rounded-full hover:opacity-50 cursor-pointer transition duration-300">
              Sign Up
            </li>
          </ul>
        </div>
        <img
          src="images/icon-hamburger.svg"
          className="cursor-pointer hidden max-lg:block"
          width={40}
          alt="menu icon"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </nav>
      <MobileMenu openMenu={openMenu}></MobileMenu>
    </header>
  );
};

export default Header;
