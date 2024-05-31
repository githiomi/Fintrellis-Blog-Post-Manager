import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react"
import { FaSun } from 'react-icons/fa'

const HeaderComponent = () => {

   const [authState, setAuthState] = useState(false);
   const profile_picture = "/profile_picture.png"
   const username = "Daniel Githiomi"

   return (

      <Flex className="w-full px-8 flex justify-between">

         <h1 className="text-2xl uppercase tracking-wide" onClick={() => setAuthState((current) => !current)}>Blog Post Manager</h1>

         <Spacer />

         <div className="flex items-center">

            <FaSun className="text-blue-300 text-2xl hover:text-blue-400 cursor-pointer duration-200 ease-in-out hover:ease-in" />

            {authState &&
               <Box alignContent="center">
                  <Avatar name={username} src={profile_picture} />

                  <Text>Daniel Githiomi</Text>
               </Box>
            }

         </div>

      </Flex>
   )
}

export default HeaderComponent
