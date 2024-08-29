import { Outlet } from "react-router-dom";
import { Navbar } from "../components/index.ts";

const LoggedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LoggedLayout;
