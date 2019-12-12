import React, { useState, useEffect } from "react";
import { Author } from "../../redux/feed/types";
import { AuthorProps } from "../Home/Feed";
import { AuthorBlob, AuthorImage } from "../Home/common";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import api from "../../services/api";

const User = () => {
  let { username } = useParams();
  const [user, setUser] = useState<Author | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api.Author.get(username || "")
      .then(response => {
        setUser(response.profile);
      })
      .catch(error => {
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [username]);

  if (isLoading) {
    return <Loader type="ThreeDots" color="#09d3ac" height={100} width={100} />;
  }

  if (user == null) {
    return <h3>Ooops, something went wrong</h3>;
  }
  return (
    <>
      <h3>{user.username}</h3>
      <p>{user.bio || "bio is not provided"}</p>
      <img src={user.image} />
    </>
  );
};

export { User };
