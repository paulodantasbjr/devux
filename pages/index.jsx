import Dashboard from "./dashboard";
import Login from "./login";
import { Notify } from "../components/Notify/Notify";

import { Layout } from "../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Notify />
        <Login />
      </Layout>
    </>
  );
};

export default Home;
