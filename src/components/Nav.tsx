import logo from "../assets/images/logo.png";
import { navLinks } from "../constants";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img src={logo} alt="Logo" width={150} height={29} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Icon icon="line-md:menu" width={32} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
