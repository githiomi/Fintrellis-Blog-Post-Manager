import { useLoaderData } from "react-router-dom"
import { BlogPost } from "../interfaces/blog_post";
import { Badge, Button, Grid, GridItem, HStack, Heading, VStack, Text, Flex, Divider, Avatar, Spacer } from "@chakra-ui/react";
import { FaHeart, FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const PostPageComponent = () => {

   const blogPost: BlogPost = useLoaderData();
   const [isLiked, setIsLiked] = useState(blogPost.userLiked);
   const [likes, setLikes] = useState(blogPost.likes);
   const likesClicked = () => {
      if (isLiked)
         setLikes((_currentLikes) => _currentLikes -= 1)
      else
         setLikes((_currentLikes) => _currentLikes += 1)

      console.log(blogPost.createdAt)
      setIsLiked((_currentIsLiked) => !_currentIsLiked);
   }

   return (
      <Grid
         templateColumns='repeat(6, 1fr)'
         gap={'2rem'}>

         <GridItem
            shadow={'xl'}
            colSpan={5}
            cursor={'pointer'}
            borderRadius={'xl'}
            bg={'white'}
            p={'2rem'} >

            <HStack mb={'2rem'}>
               <Badge bg={'blue.400'} p={'.5rem 1rem'} fontSize={'lg'} color={'white'} _hover={{ bg: 'blue.600' }} borderRadius={'full'}>{blogPost.id}</Badge>

               <Heading ml={'1rem'} fontSize={'xl'} className="uppercase">{blogPost.title}</Heading>
            </HStack>

            <Text color={'gray.500'} _hover={{ color: 'gray.800' }} className="transition duration-500">
               {blogPost.body}
            </Text>

            <HStack mt={'2rem'}>
               <Avatar bg={'blue.400'} color={'white'} name={blogPost.author} />

               <VStack ml={'.5rem'} alignItems={'start'}>
                  <Text fontSize={'xs'} color={'gray.500'}>Created by:</Text>
                  <Text fontSize={'sm'} color={'gray.800'} className="uppercase font-semibold">{blogPost.author}</Text>
               </VStack>
            </HStack>

            <Divider my={'2rem'} />

            <Flex px={'1rem'}>

               <HStack onClick={likesClicked}>
                  {isLiked ? <FaHeart className='text-red-600' /> : <FaHeart />}
                  <Text> {likes} </Text>
               </HStack>

               <Spacer />

               <Text fontSize={'sm'} color={'gray.500'} className="italic">{new Date(blogPost.createdAt).toUTCString().split(0, 16)}</Text>

            </Flex>

         </GridItem>

         <GridItem
            colSpan={1} >

            <VStack>
               <Button w={'full'} leftIcon={<FaEdit />} bg={'blue.400'}>Edit</Button>
               <Button w={'full'} leftIcon={<FaTrash />} bg={'red.400'}>Delete</Button>
            </VStack>

         </GridItem>

      </Grid>
   )
}

export default PostPageComponent