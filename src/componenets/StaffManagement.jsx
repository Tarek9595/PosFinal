import { LuShieldCheck } from "react-icons/lu";
import { HiOutlineCamera, HiOutlineLockClosed } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function StaffManagement() {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    role: Yup.string().required("Please select a role"),
    employeeId: Yup.string().required("Employee ID is required"),
    accessPin: Yup.string()
      .matches(/^\d{4}$/, "Pin must be exactly 4 digits")
      .required("Access Pin is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      role: "",
      employeeId: "GUSTO-1092",
      accessPin: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Profile Saved Successfully!");
    },
  });

  return (
    <div className="w-225">
      <div className="w-full flex flex-col gap-10 h-1.5">
        <div className="w-full flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <h1 className="font-lexend text-[36px] text-[#0F172B] font-bold capitalize">
              add new team member
            </h1>
            <h1 className="text-[18px] text-[#62748E] font-medium first-letter:uppercase">
              create a secure profile and assign access levels.
            </h1>
          </div>
          <div className="flex flex-col gap-[8.5px] mb-3">
            <div className="font-semibold text-[16px] text-[#62748E] tracking-[0.3em]">
              Step <span>1</span> of <span>2</span>
            </div>
            <div className="w-32.5 h-2 bg-[#E2E8F0] rounded-[5px] overflow-hidden">
              <div className="bg-mainGreen h-full rounded-full transition-all duration-500 w-1/2"></div>
            </div>
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full bg-white rounded-4xl p-12 flex flex-col gap-10 shadow-sm"
        >
          <div className="w-full flex justify-center">
            <div className="relative w-36 h-36 rounded-full border-2 border-dashed border-[#CAD5E2] flex flex-col items-center justify-center text-[#90A1B9] gap-1 cursor-pointer hover:bg-slate-50 transition-colors">
              <HiOutlineCamera className="text-2xl" />
              <span className="text-[10px] font-bold uppercase">Add Photo</span>
              <div className="absolute bottom-1 right-2 bg-mainGreen text-white rounded-full p-1 border-4 border-white">
                <HiPlus />
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold uppercase text-[#62748E] ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="e.g. Marcus Aurelius"
                className={`h-16 px-6 rounded-2xl bg-[#F8FAFC] border ${formik.touched.fullName && formik.errors.fullName ? "border-red-500" : "border-[#E2E8F0]"} focus:outline-none focus:border-mainGreen transition-all`}
                {...formik.getFieldProps("fullName")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold uppercase text-[#62748E] ml-1">
                Employee Role
              </label>
              <select
                name="role"
                className={`h-16 px-6 rounded-2xl bg-[#F8FAFC] border ${formik.touched.role && formik.errors.role ? "border-red-500" : "border-[#E2E8F0]"} focus:outline-none focus:border-mainGreen transition-all appearance-none`}
                {...formik.getFieldProps("role")}
              >
                <option value="" disabled>
                  Select a role...
                </option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 text-[#90A1B9]">
              <label className="text-[12px] font-bold uppercase text-[#62748E] ml-1">
                Employee ID
              </label>
              <div className="relative h-16 w-full">
                <input
                  type="text"
                  name="employeeId"
                  readOnly
                  className="h-full w-full px-6 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0] font-bold"
                  {...formik.getFieldProps("employeeId")}
                />
                <HiOutlineLockClosed className="absolute right-6 top-1/2 -translate-y-1/2 text-xl" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold uppercase text-[#62748E] ml-1">
                Access Pin (4 Digits)
              </label>
              <input
                type="password"
                name="accessPin"
                maxLength="4"
                placeholder="● ● ● ●"
                className={`h-16 px-6 rounded-2xl bg-[#F8FAFC] border ${formik.touched.accessPin && formik.errors.accessPin ? "border-red-500" : "border-[#E2E8F0]"} focus:outline-none focus:border-mainGreen transition-all text-center tracking-[1em] font-bold`}
                {...formik.getFieldProps("accessPin")}
              />
            </div>
          </div>

          <div className="w-full pt-8 flex justify-between items-end border-t border-[#F1F5F9]">
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#90A1B9] uppercase">
              <LuShieldCheck className="text-[18px]" />
              <p>Encrypted & Secure Storage</p>
            </div>
            <div className="flex items-center gap-4 uppercase text-[14px] font-bold">
              <button
                type="button"
                onClick={() => formik.resetForm()}
                className="bg-[#F1F5F9] text-[#45556C] rounded-2xl py-5 px-10 cursor-pointer hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="font-lexend bg-mainGreen text-white rounded-2xl cursor-pointer py-5 px-12 shadow-[0px_10px_20px_-5px_rgba(0,188,125,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                Save Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
