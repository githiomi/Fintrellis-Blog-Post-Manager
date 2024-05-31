import { Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';

const LoginPage = () => {

   const [username, setUsername] = useState("");

   return (
      <div className="flex-1 grid place-items-center">

         <InputGroup size='md' className='uppercase'>
            <InputLeftAddon>Username</InputLeftAddon>
            <Input placeholder='Eg: John Doe' type='text' onChange={(e) => setUsername(e.target.value)} />
         </InputGroup>

         <Button rightIcon={<FaArrowRight />} colorScheme='teal' onClick={() => console.log(username)}>
            Login
         </Button>

      </div>
   )
}

export default LoginPage