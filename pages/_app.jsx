import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";
import { GlobalStyle } from "../styles/GlobalStyle";

import { DataProvider } from "../store/GlobalState";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  );
}
