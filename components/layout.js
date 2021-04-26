import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/bbg.svg" />
        <title>Bin Blog</title>
      </Head>
      <body className="bg-gray-700 h-screen">
        <Header />
        {children}
        <Footer />
        {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
      </body>
    </>
  );
}
