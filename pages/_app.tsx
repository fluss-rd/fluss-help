import { ThemeProvider } from "@material-ui/styles";
import theme, { GlobalCss } from "../styles/theme";
import Layout from "../components/Layout";
import "@fontsource/roboto";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

