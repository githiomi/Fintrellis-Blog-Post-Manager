import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";

const MainLayout = () => {
   return (
      <div>
         <HeaderComponent />
         <Outlet />
      </div>
   )
}

export default MainLayout
