import type { AppProps } from "next/app";
import Head from "next/head";

import { ApolloProvider } from "@apollo/client";

import { createApolloClient } from "@kitakita/apollo";

import "$styles/global.scss";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Globaltalk Kitakita Edition</title>
        <meta
          content="Thinc x Cleverse Hack to School Team Kitakita Programming Kita~n Ikuyo!"
          name="description"
        />

        <meta
          content="https://kita.cunny.dev/images/globaltalkog.png"
          property="og:image"
        />
      </Head>

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
