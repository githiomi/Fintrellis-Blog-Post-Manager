export interface BlogPost {
   id: number;
   postAuthor: string;
   postTitle: string;
   postBody: string;
   createdAt: Date;
   likes: number;
}