import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import { BlogPost } from '../interfaces/blog_post'
import { FaHeart, FaRegEye } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type BlogPostComponentProps = {
   blogPost: BlogPost
}

export default function BlogPostComponent({ blogPost }: BlogPostComponentProps) {

   const [isLiked, setIsLiked] = useState(blogPost.userLiked);
   const [likes, setLikes] = useState(blogPost.likes);
   const shortDesc: string = `${blogPost.body.substring(0, 100)}...`
   const likesClicked = () => {
      if (isLiked)
         setLikes((_currentLikes) => _currentLikes -= 1)
      else
         setLikes((_currentLikes) => _currentLikes += 1)

      console.log(blogPost.createdAt)
      setIsLiked((_currentIsLiked) => !_currentIsLiked);
   }

   return (
      <Card cursor='pointer' p={'10px'}>

         <CardHeader>
            <Flex alignItems={'center'}>
               <Avatar mr={'1rem'} bg={'blue.400'} src='/fintellis_logo.png' color={'white'} name={blogPost.author} />

               <Flex direction={'column'} gap={'.2rem'}>
                  <Text as={'p'} color={'gray.400'} fontSize={'xs'}>Created by:</Text>
                  <Heading size={'md'} className='uppercase'>{blogPost.author}</Heading>
               </Flex>

            </Flex>

         </CardHeader>

         <CardBody color={'gray.500'} _hover={{ color: 'gray.700' }}>

            <Text fontSize={'lg'} mb={'1rem'} color={'black'} className='font-semibold'>{blogPost.title}</Text>

            <Text as={'p'} className='text-sm italic mb-4 underline'>Created on: <span className='font-bold'>{new Date(blogPost.createdAt).toUTCString().slice(0, 16)}</span> </Text>

            <Text as='p'>
               {shortDesc}
            </Text>
         </CardBody>

         <CardFooter className='flex items-center justify-between'>

            <HStack onClick={likesClicked}>
               {isLiked ? <FaHeart className='text-red-600' /> : <FaHeart />}
               <Text> {likes} </Text>
            </HStack>

            <Link to={`/posts/${blogPost.id}`}>
               <Button variant={'outline'} color={'blue.400'} rightIcon={<FaRegEye />}>View</Button>
            </Link>

         </CardFooter>


      </Card>
   )
}
