import * as React from "react";
import Head from "next/head";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/config/createEmotionCache";
import ColorModeContext from "@/contexts/colorModeContext";
import getMode from "@/config/theme";
import { Header } from "@/components";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = React.useState("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = React.useMemo(() => createTheme(getMode(mode)), [mode]);

  theme = responsiveFontSizes(theme);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
