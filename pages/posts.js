import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { Main } from '../components/homemain';

export default function Home({ allPostsData }) {
  return (
    <Layout page="home">
      <Main data={allPostsData} />
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
