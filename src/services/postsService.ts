import { BlogPost } from "../interfaces/blog_post"

const endpoint: string = 'blog_posts'
const url: string = `/json-server-api/${endpoint}`

export const createNewPost = async (newPost: BlogPost) => {

   const response = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost),
   });

   console.log("Post added successfully", response);
   return;

}