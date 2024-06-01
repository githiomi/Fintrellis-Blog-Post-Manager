import { BlogPost } from "../interfaces/blog_post";

const url: string = '/json-server-api/blog_posts';

export const allBlogPostLoader = async (): Promise<BlogPost[]> => {

   const response = await fetch(url);

   return await response.json();

}

export const singleBlogPostLoader = async ({ params }): Promise<BlogPost> => {

   const url: string = `/json-server-api/blog_posts/${params.id}`;

   const response = await fetch(url);

   return await response.json();

}