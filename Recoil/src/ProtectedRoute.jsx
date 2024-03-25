import { Navigate } from "react-router-dom";
import isAuthState from "./authState";

export default function ProtectedRoute() {
  if (!isAuthState) {
    return <Navigate to="/Login" />;
  }
  return <Navigate to="/Home" />;
}
