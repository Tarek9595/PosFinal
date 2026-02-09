import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { categories } from "../Store";
import Logo from "../assets/Background+Shadow.svg";

export default function NavMenu() {
  return (
    <div className=" bg-white border-r border-r-border py-8 flex flex-col">
      <div className="w-24 px-2 flex flex-col grow h-2.5 items-center gap-4 ">
        {categories.map((el, index) => (
          <NavLink
            to={el.path}
            key={index}
            className={({ isActive }) => {
              if (isActive && el.name !== "main") {
                return (
                  "bg-mainGreen/10 text-mainGreen " + " activeGreen flex-col"
                );
              } else {
                return "hover:bg-white" + " activeGreen flex-col";
              }
            }}
          >
            {el.name === "main" ? (
              <img
                className="w-23.75 transition-transform duration-300 hover:scale-110  active:scale-95"
                src={Logo}
                alt="Logo"
              />
            ) : (
              <>
                <div className="icon-outline w-6 h-6">
                  <el.icon className="w-full h-full" />
                </div>
                <p className="text-[10px] uppercase font-bold">{el.name}</p>
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="w-full flex justify-center py-3">
        <FiLogOut />
      </div>
    </div>
  );
}
