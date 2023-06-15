import Footer from "@/components/Footer";
import Header from "@/components/Header";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { Store, persistedStore } from "@/redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "@/components/Loader";

export const globalFont = localFont({
  src: "../public/fonts/IRANSansWeb.woff",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  if (router.asPath === "/Login" || router.asPath === "/signup") {
    return (
      <main className={globalFont.className}>
        <Component {...pageProps} />
      </main>
    );
  } else if (router.asPath === "/profile") {
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistedStore} loading={<Loader/>}>
          <main className={globalFont.className}>
            <Header />
            <Component {...pageProps} />
          </main>
        </PersistGate>
      </Provider>
    );
  } else {
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistedStore} loading={<Loader/>}>
          <main className={globalFont.className}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </main>
        </PersistGate>
      </Provider>
    );
  }
}
