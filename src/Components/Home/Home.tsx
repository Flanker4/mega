import React, { useEffect, useState } from "react";
import { Feed } from "./Feed";
import { Pager } from "./Pager";
import { Article } from "../../redux/feed/types";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { IStore } from "../../redux";
import { feedActions } from "../../redux/feed/actions";
import { EnterMessage } from "./EnterMessage";

interface HomeProps {
  isAuthorized: boolean;
  isLoading: boolean;
  page?: number;
  articles?: Article[];
  loadPage: (payload: { page: number }) => any;
  sendMessage: (payload: { message: string }) => any;
}

export const Home = ({
  isAuthorized,
  isLoading,
  articles,
  page,
  loadPage,
  sendMessage
}: HomeProps) => {
  const [selectedPage, setSelectedPage] = useState(page || 0);

  useEffect(() => {
    if (page !== selectedPage) {
      loadPage({ page: selectedPage });
    }
  }, [selectedPage, page, loadPage]);

  const TopItem = isAuthorized && <EnterMessage sendMessage={sendMessage} />;
  const CentralItem = isLoading ? (
    <Loader type="ThreeDots" color="#09d3ac" height={100} width={100} />
  ) : (
    <Feed articles={articles || []} />
  );

  return (
    <header className="App-header">
      {TopItem}
      <Pager page={selectedPage} setPage={setSelectedPage} />
      {CentralItem}
      <Pager page={selectedPage} setPage={setSelectedPage} />
    </header>
  );
};

export default connect(
  ({ feed, auth }: IStore) => ({
    ...feed,
    isAuthorized: !!(auth.user && auth.user.token)
  }),
  {
    loadPage: feedActions.loadFeed.started,
    sendMessage: feedActions.sendMessage.started
  }
)(Home);
