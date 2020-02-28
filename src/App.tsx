import React, { FC } from "react";
import { Layout } from "./components/Layout";
import { MainWidget } from "./containers/MainWidget";

const App: FC = () => {
  return (
    <Layout>
      <MainWidget />
    </Layout>
  );
};

export { App };
