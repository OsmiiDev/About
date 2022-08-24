import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * Main app page
 * @param {AppProps} properties App properties
 * @return {React.ReactNode} The React node
 */
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

/**
 * <MantineProvider theme={{
    colorScheme: "dark",
    fontFamily: "Roboto",
  }}>
    <TypographyStylesProvider >
      <AppShell
        padding={0}
      >
      </AppShell>
    </TypographyStylesProvider>
  </MantineProvider>
 */
export default App;
