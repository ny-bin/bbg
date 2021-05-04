import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Date from '../../components/date';
import markdownStyles from '../../components/marldown-styles.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="min-h-screen container mx-auto pt-12 text-gray-200 max-w-4xl">
        <h1 className="text-4xl">{postData.title}</h1>
        <div className="italic text-sm">
          <Date dateString={postData.date} />
        </div>
        <div className="mx-auto">
          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
