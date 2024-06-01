import { useLoaderData } from "react-router-dom";
import { BlogPost } from "../interfaces/blog_post";
import BlogPostComponent from "../components/BlogPost";
import { SimpleGrid } from "@chakra-ui/react";

const HomePage = () => {

   const blogPosts: BlogPost[] = useLoaderData();

   return (
      <SimpleGrid minChildWidth={'300px'} gap={'2rem'} >
         {blogPosts && blogPosts.map((_blogPost: BlogPost) => <BlogPostComponent key={_blogPost.id} blogPost={_blogPost} />)}
      </SimpleGrid>
   )
}

export default HomePage;
