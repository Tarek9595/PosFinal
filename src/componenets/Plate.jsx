import { CgMathPlus } from "react-icons/cg";

export default function Plate(props) {
  return (
    <div className="p-4 flex flex-col gap-5 rounded-4xl w-85 shadow-[0px_-1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] border border-[#F1F5F9]">
      <div className="w-full h-68.25">
        <img
          src={props.img}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-1 w-full ">
        <h1 className="font-lexend font-bold text-[18px] text-[#0F172B] capitalize">
          {props.name}
        </h1>
        <p className="text-[12px] text-[#90A1B9]">{props.ingredients}</p>
        <div className="w-full flex justify-between items-center py-3 px-1">
          <span className="text-mainGreen text-[20px] font-bold">
            ${props.price}
          </span>
          <button className="bg-mainGreen h-10 w-10 rounded-xl flex justify-center items-center text-white text-[20px]">
            <CgMathPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
