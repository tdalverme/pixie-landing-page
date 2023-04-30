import { AppProps } from 'next/app';
import Head from 'next/head';
import "../styles/globals.css";
import 'react-material-symbols/dist/rounded.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}