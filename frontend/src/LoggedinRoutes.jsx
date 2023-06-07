import { Navigate, Outlet } from "react-router-dom";

const LoggedInRoute = () => {
    const user = localStorage.getItem("token");
    return(
        user ? <Navigate to="/profile" /> : <Outlet />
    )
};
export default LoggedInRoute;