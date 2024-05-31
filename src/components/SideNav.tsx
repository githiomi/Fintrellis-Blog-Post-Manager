import { Divider, Flex, Image, Text } from '@chakra-ui/react';

function SideNavComponent() {

   const logo_url = '/fintrellis_logo.png';

   return (
      <div>

         <Flex direction={{ base: 'row', md: 'column' }} alignItems="center" gap={5}>
            <Image
               bg='white'
               rounded='full'
               p='10px'
               boxSize="100px"
               src={logo_url} />
            <Text as="h1" textColor="white" fontSize="2rem" className='uppercase'>Fintrellis</Text>
         </Flex>

         <Divider display={{ base: 'hidden', md: 'block' }} mt={10} />

      </div>
   )
}

export default SideNavComponent
