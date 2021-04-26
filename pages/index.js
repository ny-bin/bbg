import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { Main } from '../components/homemain';

export default function Home() {
  return (
    <Layout page="home">
      <Main />
    </Layout>
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
