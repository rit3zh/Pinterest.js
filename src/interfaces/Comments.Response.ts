export interface CommentUser {
  username?: string;
  displayName?: string;
  image?: string;
  id?: string;
}

export interface CommentsResultResponse {
  text?: string;
  createdAt?: string;
  user?: CommentUser;
  details?: string;
  likes?: number;
  image?: string[];
  tags?: string[];
}
