import React, { FC } from "react";
import { Layout } from "./components/Layout";
import { PhotoCardsList } from "./containers/PhotoCardsList";

const App: FC = () => {
  return (
    <Layout>
      <PhotoCardsList />
    </Layout>
  );
};

export { App };
