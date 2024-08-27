export interface AuthorResponseType {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

export interface BlogResponseType {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: AuthorResponseType;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}






