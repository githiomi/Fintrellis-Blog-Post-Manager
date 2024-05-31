import { useLoaderData } from "react-router-dom";
import { BlogPost } from "../interfaces/blog_post";
import { Text } from "@chakra-ui/react";

const HomePage = () => {

   const blogPosts: BlogPost[] = useLoaderData();

   return (
      <>
         {blogPosts && blogPosts.map((_blogpost: BlogPost) => <Text>{_blogpost.title}</Text>)}
      </>
   )
}

export default HomePage;
