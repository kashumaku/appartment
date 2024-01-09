import { IoPersonOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
const NavBar = () => {
  return (
    <nav className="text-white bg-gray-800 py-8 flex justify-around ">
      <div>
        <h1>logo</h1>
      </div>
      <div>
        <ul className="flex gap-x-6">
          <li>HOME</li>
          <li>PAGES</li>
          <li>PORPERTY</li>
          <li>BLOG</li>
        </ul>
      </div>
      <div className="flex gap-x-6">
        <p className="flex gap-x-2">
          <IoPersonOutline className="flex items-center" />
          JOIN US
        </p>
        <p className="flex gap-x-2">
          <GoPlus />
          ADD PROPERTY
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
