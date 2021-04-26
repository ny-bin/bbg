import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';

export default function Layout({ children, home }) {
  return (
    <>
      <div className="bg-gray-700 h-screen">
        <Head>
          <link rel="icon" href="/images/bbg.svg" />
          <title>Bin Blog</title>
        </Head>
        <Header></Header>
        {children}
        <Footer />
        {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
      </div>
    </>
  );
}
