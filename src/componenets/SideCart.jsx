import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

export default function SideCart() {
  let orderBtn = `py-4 w-42 capitalize  flex justify-center items-center font-semibold test-[12px] rounded-xl`;
  let orderBtnDisable = `bg-inherit text-[#90A1B9]`;
  let orderBtnActive = `bg-white text-mainGreen `;
  return (
    <div className="w-104.75 h-full border-l border-[#E2E8F0] flex flex-col">
      <div className="w-full p-8 pb-4 flex flex-col justify-center items-center gap-4 border-b border-[#E2E8F0]">
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

      <div className="p-6 flex flex-col gap-6 grow overflow-auto">
        <div className="flex justify-between items-center w-full">
          <div className="w-16 h-16 rounded-2xl bg-[#F1F5F9]"></div>
          <div className="font-bold capitalize">
            <h1 className="text-[#0F172B] text-[14px]">classic wagyu burger</h1>
            <span className="text-mainGreen text-[12px]">$18.50</span>
          </div>
          <div className="flex items-center justify-center gap-6 px-4 py-3 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl">
            <CgMathMinus className="text-[12px] text-[#90A1B9] font-bold" />
            <span className="font-black text-[12px] text-[#0F172B]">2</span>
            <CgMathPlus className="text-[12px] text-mainGreen font-bold" />
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="w-16 h-16 rounded-2xl bg-[#F1F5F9]"></div>
          <div className="font-bold capitalize">
            <h1 className="text-[#0F172B] text-[14px]">classic wagyu burger</h1>
            <span className="text-mainGreen text-[12px]">$18.50</span>
          </div>
          <div className="flex items-center justify-center gap-6 px-4 py-3 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl">
            <CgMathMinus className="text-[12px] text-[#90A1B9] font-bold" />
            <span className="font-black text-[12px] text-[#0F172B]">2</span>
            <CgMathPlus className="text-[12px] text-mainGreen font-bold" />
          </div>
        </div>
      </div>

      <div className="py-4 px-8 flex flex-col gap-6 border-t border-[#E2E8F0]">
        <div className="px-2 flex flex-col">
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex justify-between items-center uppercase tracking-wide font-bold text-[12px]">
              <span className="text-[#90A1B9]">subtotal</span>
              <span className="text-[#0F172B]">$ 59.00</span>
            </div>
            <div className="flex justify-between items-center uppercase tracking-wide font-bold text-[12px]">
              <span className="text-[#90A1B9]">service tax (5%)</span>
              <span className="text-[#0F172B]">$ 2.95</span>
            </div>
          </div>

          <div className=" border-t border-[#E2E8F0] pt-5 flex justify-between items-center capitalize font-lexend font-bold">
            <span className="text-[#0F172B] text-[20px]">total due</span>
            <span className="text-mainGreen text-[30px]">$61.95</span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 text-white tracking-widest bg-mainGreen w-full py-5 font-lexend  font-bold cursor-pointer uppercase rounded-2xl group shadow-[0px_-8px_10px_-6px_#00BC7D33,0px_20px_25px_-5px_#00BC7D33]">
          <span className="text-[14px]">proceed to checkout</span>
          <BiRightArrowAlt className="text-[16px] transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </div>
  );
}
