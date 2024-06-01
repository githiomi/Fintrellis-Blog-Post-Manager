import { Avatar, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import { BlogPost } from '../interfaces/blog_post'
import { FaHeart } from 'react-icons/fa6'
import { useState } from 'react'

type BlogPostComponentProps = {
   blogPost: BlogPost
}

export default function BlogPostComponent({ blogPost }: BlogPostComponentProps) {

   const [isLiked, setIsLiked] = useState(blogPost.userLiked);
   const [likes, setLikes] = useState(blogPost.likes);

   const likesClicked = () => {
      if (isLiked)
         setLikes((_currentLikes) => _currentLikes -= 1)
      else
         setLikes((_currentLikes) => _currentLikes += 1)

      setIsLiked((_currentIsLiked) => !_currentIsLiked);
   }

   return (
      <Card cursor='pointer' p={'10px'}>

         <CardHeader>
            <Flex alignItems={'center'}>
               <Avatar mr={'1rem'} bg={'blue.400'} src='/fintellis_logo.png' name={blogPost.author} />

               <Flex direction={'column'} gap={'.2rem'}>
                  <Text as={'p'} color={'gray.400'} fontSize={'xs'}>Created by:</Text>
                  <Heading size={'md'} className='uppercase'>{blogPost.author}</Heading>
               </Flex>

            </Flex>

         </CardHeader>

         <CardBody color={'gray.500'} _hover={{ color: 'gray.700' }}>
            <Text as='p'>
               {blogPost.body}
            </Text>
         </CardBody>

         <CardFooter>

            <HStack onClick={likesClicked}>
               {isLiked ? <FaHeart className='text-red-600' /> : <FaHeart />}
               <Text> {likes} </Text>
            </HStack>

         </CardFooter>


      </Card>
   )
}
