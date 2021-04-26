import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { Main } from '../components/main';

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <Main />
      </Layout>
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
