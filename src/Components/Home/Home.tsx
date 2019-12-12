import React, { useEffect, useState } from "react";
import { Feed } from "./Feed";
import { Pager } from "./Pager";
import { Article } from "../../redux/feed/types";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { IStore } from "../../redux";
import { feedActions } from "../../redux/feed/actions";

interface HomeProps {
  isLoading: boolean;
  page?: number;
  articles?: Article[];
  loadPage: (payload: { page: number }) => any;
}

export const Home = ({ isLoading, articles, page, loadPage }: HomeProps) => {
  const [selectedPage, setSelectedPage] = useState(page || 0);

  useEffect(() => {
    if (page !== selectedPage) {
      loadPage({ page: selectedPage });
    }
  }, [selectedPage, page, loadPage]);

  const CentralItem = isLoading ? (
    <Loader type="ThreeDots" color="#09d3ac" height={100} width={100} />
  ) : (
    <Feed articles={articles || []} />
  );

  return (
    <header className="App-header">
      <Pager page={selectedPage} setPage={setSelectedPage} />
      {CentralItem}
      <Pager page={selectedPage} setPage={setSelectedPage} />
    </header>
  );
};

export default connect(({ feed }: IStore) => ({ ...feed }), {
  loadPage: feedActions.loadFeed.started
})(Home);
