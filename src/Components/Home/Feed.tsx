import React from "react";
import { Article, Author } from "../../redux/feed/types";
import { FeedBlob, AuthorBlob, AuthorImage } from "./common";

interface FeedProps {
  articles: Article[];
}

interface ArticleProps {
  article: Article;
}

interface AuthorProps {
  author: Author;
}
const AuthorItem = ({ author }: AuthorProps) => {
  return (
    <AuthorBlob>
      <AuthorImage src={author.image} />
      <h3>{author.username}</h3>
    </AuthorBlob>
  );
};

const FeedItem = ({ article }: ArticleProps) => {
  return (
    <FeedBlob>
      <AuthorItem author={article.author} />
      <p>{article.description}</p>
    </FeedBlob>
  );
};

const Feed = ({ articles }: FeedProps) => {
  const FeedItems = articles.map(article => {
    return <FeedItem article={article} key={article.slug} />;
  });
  return <>{FeedItems}</>;
};

export { Feed };
