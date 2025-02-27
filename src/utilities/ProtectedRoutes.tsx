import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} replace={true} />;
  }
};

export default ProtectedRoutes;
