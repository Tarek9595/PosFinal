import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="w-full  border-b py-4.25 px-10 border-b-border flex justify-between items-center">
      <div className="relative">
        <IoSearch className="absolute text-[#90A1B9] w-5 top-[50%] left-4 translate-y-[-50%]" />
        <input
          className="input w-md outline-none"
          placeholder="Search dishes, drinks, extras..."
        />
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-1 py-2 px-4 items-center bg-mainGreen/10 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-mainGreen "></div>
          <p className="uppercase font-bold text-[12px] tracking-widest text-mainGreen">
            table 12
          </p>
        </div>
        <div className="w-0.5 h-6 bg-[#E2E8F0]"></div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-0.75 font-bold">
            <p className="capitalize text-[14px] text-[#0F172B] ml-3">
              ahmed khalil
            </p>
            <p className="text-[10px] tracking-widest text-[#90A1B9] uppercase">
              cashier station
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-[#E2E8F0]"></div>
        </div>
      </div>
    </div>
  );
}
