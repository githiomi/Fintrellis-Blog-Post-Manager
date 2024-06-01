import { Avatar, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaArrowRight } from 'react-icons/fa'
import { Link, redirect } from "react-router-dom";

interface HeaderProps {
   username: string
}

const HeaderComponent = ({ username }: HeaderProps) => {

   const profile_picture = "/profile_picture.png"

   return (

      <Flex className="w-full flex justify-between mb-8">

         <h1 className="text-3xl uppercase tracking-wide font-semibold">Blog Post Manager</h1>

         <Spacer />

         <Flex alignItems='center'>

            {/* <FaSun className="text-blue-300 text-3xl hover:text-blue-400 cursor-pointer duration-200 ease-in-out hover:ease-in mx-10" /> */}

            <Flex alignItems='center' gap='1rem' className="hover:scale-[1.02] duration-300 cursor-pointer">
               <Avatar name={username} src={profile_picture} bg={'blue.300'} />

               <Text className="uppercase font-semibold" >{username}</Text>
            </Flex>

            <Link to={'/auth'}>
               <Button variant={'outline'} colorScheme="blue" mx={5} rightIcon={<FaArrowRight />} onClick={() => localStorage.removeItem("username")}>
                  Logout
               </Button>
            </Link>

         </Flex>

      </Flex >
   )
}

export default HeaderComponent
