import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function SideCart() {
  let orderBtn = `py-4 w-42 capitalize  flex justify-center items-center font-semibold test-[12px] rounded-xl`;
  let orderBtnDisable = `bg-inherit text-[#90A1B9]`;
  let orderBtnActive = `bg-white text-mainGreen `;
  return (
    <div className="w-104.75 h-full border-l border-[#E2E8F0]">
      <div className="w-full p-8 flex flex-col justify-center items-center gap-4 border-b border-[#E2E8F0]">
        <div className="w-full flex justify-between items-center">
          <p className="font-bold font-lexend text-[24px] text-[#0F172B] capitalize">
            current order
          </p>
          <button>
            <FaRegTrashAlt className="text-[15px] text-[#FF2056]" />
          </button>
        </div>
        {/* هيحتاج تعديل في ال path */}
        <div className="w-full flex justify-between items-center gap-2 p-1 bg-[#F8FAFC] ">
          <NavLink
            className={({ isActive }) =>
              (isActive ? orderBtnActive : orderBtnDisable) + orderBtn
            }
          >
            Dine In
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              (isActive ? orderBtnActive : orderBtnDisable) + orderBtn
            }
          >
            take away
          </NavLink>
        </div>
      </div>
    </div>
  );
}
