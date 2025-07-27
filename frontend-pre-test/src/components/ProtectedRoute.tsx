import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";

const ProtectedRoute = () => {
//   const { user } = useAuth();
  return true ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
