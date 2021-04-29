import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { SimpleSlider } from '../components/slider';

export default function Home({ allPostsData }) {
  return (
    <Layout page="home">
      <main className="bg-gray-700 shadow min-h-screen mt-16">
        <SimpleSlider data={allPostsData} />
        <div className="py-5  text-center text-white">
          <p className="relative py-5 text-4xl border-b w-1/2 mx-auto">About This Page</p>
          <p className="text-m leading-loose text-center text-gray-300 py-2">
            技術ブログ、制作物掲載メインのサイトとなっております。
          </p>
          <p className="text-center text-m leading-loose text-gray-300 py-2">
            こちらの記事を見て、質問等あればいつでも問い合わせていただけたら返信いたします。
          </p>
          <p className=" text-center text-m leading-loose text-gray-300 py-2">
            また、サイト制作等のご相談やデザイン制作のご相談等あればTwitterのDMからご連絡ください。
          </p>
        </div>
      </main>
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
