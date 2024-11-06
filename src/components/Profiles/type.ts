import { TweetType } from "../Tweet/type";

export interface User {
  userId: number
  name:string;
  username: string;
  profilePicture: string;
  bio: string;
  followersCount: number;
  followingCount: number;
  website?: string; 
  coverImage?: string; 
  tweets: TweetType[];
}