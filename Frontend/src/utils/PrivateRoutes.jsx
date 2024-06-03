import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const tempuser = localStorage.getItem("user");
  const user = JSON.parse(tempuser);
  return user?.role === "admin" && user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoutes;
