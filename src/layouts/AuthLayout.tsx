import { Grid, GridItem } from "@chakra-ui/react"
import SideNavComponent from "../components/SideNav"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
   return (
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">

         <GridItem
            as="aside"
            colSpan={{ base: 6, md: 2, lg: 1 }}
            bg="blue.300"
            minH={{ md: "100vh" }}
            p={30}>

            <SideNavComponent isAuthenticated={false} />
         </GridItem>

         <GridItem
            as="main"
            colSpan={{ base: 6, md: 4, lg: 5 }}
            p={10}>
            <Outlet />
         </GridItem>

      </Grid>
   )
}

export default AuthLayout