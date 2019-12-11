export interface FeedState {
  isLoading: boolean;
  articles?: Article[];
  articleCount: number;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  author: Author;
  favoritesCount: number;
}

export interface Author {
  username: string;
  bio?: string;
  image: string;
}
