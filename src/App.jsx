import { BrowserRouter, Route, Routes } from "react-router-dom";
import CashierLayout from "./layouts/CashierLayout";
import AdminLayout from "./layouts/AdminLayout";
import CategoryProducts from "./pages/CategoryProducts";
import LoginStaff from "./pages/LoginStaff";
import DashboardPage from "./componenets/DashboardPage";
import StaffManagement from "./componenets/StaffManagement";
import MenuEditor from "./componenets/MenuEditor";
import SalesReports from "./componenets/SalesReports";

export default function App() {
  return (
    <div className="w-full h-dvh">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CashierLayout />}>
            <Route index element={<CategoryProducts />} />
            <Route path=":categoryName" element={<CategoryProducts />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="staff" element={<StaffManagement />} />
            <Route path="menu" element={<MenuEditor />} />
            <Route path="sales" element={<SalesReports />} />
          </Route>

          <Route path="/orders" />
          <Route path="/kitchen" />

          <Route path="/login" element={<LoginStaff />} />
          <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
