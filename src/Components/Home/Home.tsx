import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import { Feed } from "./Feed";
import { Pager } from "./Pager";
import { Article, FeedState } from "../../redux/feed/types";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { IStore } from "../../redux";
import { feedActions } from "../../redux/feed/actions";

interface HomeProps {
  isLoading: boolean;
  articles?: Article[];
  loadPage: (payload: { page: number }) => any;
}

export const Home = ({ isLoading, articles, loadPage }: HomeProps) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadPage({ page });
  }, [page]);

  const CentralItem = isLoading ? (
    <Loader type="ThreeDots" color="#09d3ac" height={100} width={100} />
  ) : (
    <Feed articles={articles || []} />
  );

  return (
    <header className="App-header">
      <Pager page={page} setPage={setPage} />
      {CentralItem}
      <Pager page={page} setPage={setPage} />
    </header>
  );
};

export default connect(({ feed }: IStore) => ({ ...feed }), {
  loadPage: feedActions.loadFeed.started
})(Home);
