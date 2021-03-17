import Head from "next/head";
import { Header } from "./Header";

export const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section>
        <Header/>
        <div>{children}</div>
      </section>
      <footer>Built by me!</footer>
    </>
  );
};