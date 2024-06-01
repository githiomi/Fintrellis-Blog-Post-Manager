import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaArrowRight, FaUser } from 'react-icons/fa';
import { Form, redirect } from 'react-router-dom';

const LoginPage = () => {

   return (
      <Flex minH='100vh' className="flex flex-col gap-8 items-center justify-center">

         <Form method='post' action='/posts'>

            <FormControl isRequired mb={'2rem'}>
               <FormLabel color={'blue.400'}>Username:</FormLabel>

               <InputGroup size={'lg'}>
                  <InputLeftElement pointerEvents={'none'}>
                     <FaUser color={'blue.400'} />
                  </InputLeftElement>
                  <Input name='usernameInput' errorBorderColor='red.600' focusBorderColor='blue.400' placeholder='Eg: John Doe' type='text' />
               </InputGroup>

               <FormErrorMessage>This field is required</FormErrorMessage>
            </FormControl>

            <Button minW={'100%'} type='submit' rightIcon={<FaArrowRight />} bg={'blue.400'} color={'white'}>
               Login
            </Button>
         </Form>

      </Flex>
   )
}

const createAction = async ({ request }) => {
   const data = await request.formData();

   const username = data.get('usernameInput');

   localStorage.setItem('username', username);

   return redirect('/posts')

}

export { LoginPage as default, createAction }