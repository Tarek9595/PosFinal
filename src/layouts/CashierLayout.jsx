import { Outlet } from "react-router-dom";
import NavMenu from "../componenets/NavMenu";
import SearchBar from "../componenets/SearchBar";
import SideCart from "../componenets/SideCart";

export default function CashierLayout() {
  return (
    <div className="w-full h-full overflow-hidden flex">
      <NavMenu />
      <div className="h-full grow  flex flex-col">
        <SearchBar />
        <div className="w-full h-2.5 bg-green-500 grow overflow-auto">
          <Outlet />
        </div>
      </div>
      <SideCart />
    </div>
  );
}
