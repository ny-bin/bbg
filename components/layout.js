import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/bbg.svg" />
        <title>Bin Blog</title>
      </Head>
      <body className="bg-gray-700 h-screen">
        <Header />
        {props.children}
        <Footer />
      </body>
    </>
  );
}
