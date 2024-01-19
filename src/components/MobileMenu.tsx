import { FunctionComponent } from "react";

interface MobileMenuProps {
  openMenu: boolean;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ openMenu }) => {
  return (
    <div
      className={` ${
        openMenu ? "scale-100" : "scale-0"
      } transition-transform duration-300 p-8 mx-8 bg-dark-violet-primary absolute top-32 left-0 right-0 rounded-xl z-50`}
    >
      <ul className="flex flex-col gap-4 text-white border-b pb-4 text-center">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <ul className="flex flex-col gap-4 text-white pt-4 text-center">
        <li>Login</li>
        <li className="bg-cyan-primary px-4 py-2 rounded-full w-full text-center transition hover:opacity-75 hover:scale-95 ">
          Sign Up
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
