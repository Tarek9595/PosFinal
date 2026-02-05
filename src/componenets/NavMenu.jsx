import Logo from "../assets/Background+Shadow.svg";
import IconOne from "../assets/food_icon.svg?react";
import IconTwo from "../assets/drink_icon.svg?react";
import IconThree from "../assets/dessert_icon.svg?react";
import IconFour from "../assets/side_icon.svg?react";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

export default function NavMenu() {
  const categories = [
    { name: "Food", path: "/food", icon: IconOne },
    { name: "Drinks", path: "/drinks", icon: IconTwo },
    { name: "Dessert", path: "/dessert", icon: IconThree },
    { name: "Sides", path: "/sides", icon: IconFour },
  ];

  return (
    <div className="w-24 bg-white border-r border-r-border py-8 flex flex-col">
      <img className="w-23.75" src={Logo} />

      <div className="w-full px-2 flex flex-col grow h-2.5  items-center gap-4 ">
        {categories.map((el, index) => (
          <NavLink
            to={el.path}
            key={index}
            className={({ isActive }) =>
              (isActive && "bg-mainGreen/10 text-mainGreen ") + " activeGreen"
            }
          >
            <div className="icon-outline w-6 h-6">
              <el.icon className="w-full h-full" />
            </div>
            <p className="text-[10px] uppercase ">{el.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="w-full flex justify-center py-3">
        <FiLogOut />
      </div>
    </div>
  );
}
