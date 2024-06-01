export interface BlogPost {
   id: number;
   author: string;
   title: string;
   body: string;
   likes: number;
   userLiked: boolean;
   createdAt: Date;
}