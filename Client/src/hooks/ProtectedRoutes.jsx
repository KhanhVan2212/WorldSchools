import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoutes = ({ children }) => {
  const { user } = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user.role != "admin") {
    toast.warning("Bạn không có quyền truy cập vào trang này");
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
