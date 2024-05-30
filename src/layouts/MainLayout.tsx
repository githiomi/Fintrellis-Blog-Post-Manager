import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";
import { Container } from "@chakra-ui/react";

const MainLayout = () => {
   return (
      <>
         <Container maxW='container.lg'>
            <HeaderComponent />
            <Outlet />
         </Container>
      </>
   )
}

export default MainLayout
