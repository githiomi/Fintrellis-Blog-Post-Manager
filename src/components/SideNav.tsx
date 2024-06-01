import { Divider, Flex, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { FaEdit, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function SideNavComponent() {

   const logo_url = '/fintrellis_logo.png';

   return (
      <Flex direction={{ base: 'row', md: 'column' }} justifyContent={'space-between'} alignItems={'center'}>

         <Flex direction={{ base: 'row', md: 'column' }} alignItems="center" gap={5}>
            <Image
               bg='white'
               rounded='full'
               p='10px'
               boxSize="100px"
               src={logo_url} />
            <Text as="h1" textColor="white" fontSize="2rem" className='uppercase'>Fintrellis</Text>
         </Flex>

         <Divider my={10} />

         <List spacing='2rem' fontSize='1.3rem' color={'white'}>

            <ListItem mb={0}>
               <NavLink
                  to={'/posts'}>
                  <ListIcon as={FaHome} />
                  Home
               </NavLink>
            </ListItem>
            <ListItem>
               <NavLink
                  to={'/'}>
                  <ListIcon as={FaEdit} />
                  Create New Post
               </NavLink>
            </ListItem>

         </List>

      </Flex>
   )
}

export default SideNavComponent
