import "@/shared/styles/globals.css";
import "@/shared/styles/globals.scss";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
