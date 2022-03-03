import Head from "next/head";
import {
  StyledContainerHome,
  StyledMainContentHome,
} from "../styles/home/styled";
import { Navbar } from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>DEVUX</title>
      </Head>
      <StyledContainerHome>
        <div>
          <Navbar />
        </div>
        <StyledMainContentHome>
          <div className="content_one">
            <h2>content 1</h2>
          </div>
          <div className="content_two">
            <h2>content 2</h2>
          </div>
        </StyledMainContentHome>
      </StyledContainerHome>
    </>
  );
};

export default Home;
