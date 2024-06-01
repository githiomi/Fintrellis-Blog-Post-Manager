import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { BlogPost } from "../interfaces/blog_post";
import { createNewPost } from "../services/postsService";

const CreatePostPage = () => {

   const navigate = useNavigate();

   const postData: BlogPost[] = useLoaderData();
   const postsLength = postData.length;
   const username = localStorage.getItem('username');

   const [postTitle, setPostTitle] = useState();
   const [postBody, setPostBody] = useState();
   const isError = false;

   // Functions Submit form
   const submitForm = (e) => {
      e.preventDefault();

      const newPost = {
         id: postsLength + 1,
         author: username,
         title: postTitle,
         body: postBody,
         likes: 0,
         userLiked: false,
         createdAt: new Date()
      }

      createNewPost(newPost);

      return navigate('/posts')
   }

   return (
      <Box h={'80%'} display={'grid'} placeItems={'center'}>

         <Form onSubmit={submitForm} className="w-[50%] m-[auto]">
            <FormControl isInvalid={isError} isRequired my={'1rem'}>
               <FormLabel>Post Title:</FormLabel>
               <Input type='text' placeholder="Enter post title" onChange={e => setPostTitle(e.target.value)} />
               {isError && <FormErrorMessage>This field is required.</FormErrorMessage>}
            </FormControl>

            <FormControl isInvalid={isError} isRequired my={'1rem'}>
               <FormLabel>Post Body</FormLabel>
               <Textarea onChange={(e) => setPostBody(e.target.value)} placeholder="Enter Blog Post Content" />
               {isError && <FormErrorMessage>This field is required.</FormErrorMessage>}
            </FormControl>

            <Button type="submit" mt={'2rem'} bg={'blue.400'} color={'white'} leftIcon={<FaCheck />}>Create New Post</Button>
         </Form>

      </Box>
   )
}

export default CreatePostPage