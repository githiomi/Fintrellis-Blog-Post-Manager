import { BlogPost } from "../interfaces/blog_post";

const url: string = `http://localhost:8000/blog_posts`;

export const blogPostLoader = async (): Promise<BlogPost[]> => {

   const response = await fetch(url);

   return response.json();

}