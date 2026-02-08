import { BrowserRouter, Route, Routes } from "react-router-dom";
import CashierLayout from "./layouts/CashierLayout";
import AdminLayout from "./layouts/AdminLayout";
import CategoryProducts from "./pages/CategoryProducts";
import LoginStaff from "./pages/LoginStaff";

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
            <Route index element={<AdminLayout />} />
            <Route path=":adminNavCat" element={<AdminLayout />} />
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
