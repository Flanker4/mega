export interface FeedState {
  isLoading: boolean;
  isSending: boolean;
  page?: number;
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

export const DummyArticle = {
  slug: "",
  title: "Dummy",
  description: "Dummy",
  body: "Dummy",
  author: {
    username: "",
    image: ""
  },
  favoritesCount: 0
};
