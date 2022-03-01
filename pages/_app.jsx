import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Layout } from "../components/Layout";
import { DataProvider } from "../store/GlobalState";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </DataProvider>
  );
}
