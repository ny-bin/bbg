import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { Profile } from '../components/profile';

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <Profile />
      </Layout>
      {/* <Head>
        <title>BBG</title>
      </Head>
      <Header />
      <Footer /> */}
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
