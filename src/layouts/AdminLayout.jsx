import { FiLogOut } from "react-icons/fi";
import Logo from "../assets/Admin.svg";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { LuChartPie } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function AdminLayout() {
  const catAdminNav = [
    { name: "dashboard", path: "/", icon: MdOutlineDashboard },
    { name: "staff", path: "/staff", icon: HiOutlineUsers },
    { name: "menu", path: "/menu", icon: HiOutlineBookOpen },
    { name: "sales", path: "/sales", icon: LuChartPie },
  ];

  return (
    <div className="w-full h-full overflow-hidden flex">
      <div className="w-[288px] py-8 flex flex-col">
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center w-full pl-6">
            <div className="w-18 h-full flex justify-center items-center">
              <img
                className="w-full h-auto object-contain  mt-4.25"
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="font-lexend font-bold text-[24px] capitalize flex gap-px">
              <h1 className="text-[#0F172B]">gusto</h1>
              <h1 className="text-mainGreen">pos</h1>
            </div>
          </div>
        </div>
        <div className="w-full px-2 flex flex-col grow h-2.5  items-center gap-4 ">
          {catAdminNav.map((el, index) => (
            <NavLink
              to={el.path}
              key={index}
              className={({ isActive }) =>
                isActive && "bg-mainGreen/10 text-mainGreen " + " activeGreen"
              }
            >
              <el.icon />
              <p className="text-[10px] uppercase font-bold">{el.name}</p>
            </NavLink>
          ))}
        </div>
        <button className="w-full flex items-center p-6 gap-4 capitalize text-red-600 cursor-pointer text-[24px]">
          <FiLogOut />
          <h1>log out</h1>
        </button>
      </div>
      <div className="h-full grow flex flex-col bg-amber-600"></div>
    </div>
  );
}

/* <div className="w-full px-2 flex flex-col grow h-2.5  items-center gap-4 ">
           {categories.map((el, index) => (
            <NavLink
              to={el.path}
              key={index}
              className={({ isActive }) => {
                if (isActive && el.name !== "main") {
                  return "bg-mainGreen/10 text-mainGreen " + " activeGreen";
                } else {
                  return "hover:bg-white" + " activeGreen";
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
        </div> */
