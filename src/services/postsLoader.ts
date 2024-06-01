import { BlogPost } from "../interfaces/blog_post";

const url: string = `/json-server-api/blog_posts`;

export const blogPostLoader = async (): Promise<BlogPost[]> => {

   const response = await fetch(url);

   return await response.json();

}