import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/scrollbar.css";
import "../styles/markdown.css";
import "../styles/toastvg.css";
import { NepoProvider } from "../components/mobx/Nepocontext";

function MyApp({ Component, pageProps }) {
  return (
    <NepoProvider>
      <Component {...pageProps} />
    </NepoProvider>
  );
}

export default MyApp;