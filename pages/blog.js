import Layout from '../components/layout';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout page="home">
      <main className="bg-gray-700 min-h-screen mt-16 container mx-auto">
        <div>
          <p className="w-2/3 mx-auto font-extrabold font-serif text-3xl text-gray-200 pb-10">
            Tech
          </p>
          <div class="flex flex-wrap -m-2 w-2/3 mx-auto">
            {allPostsData.map(({ id, date, title, img }) => (
              <div class="p-2 md:w-1/2 w-full h-40" key={id}>
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-gray-200">
                  <div class="w-16 h-16 bg-gray-100 mr-4 flex justify-center items-center">
                    <img
                      alt="team"
                      class="w-16 object-cover object-center flex-shrink-0"
                      src={img}
                      width="80"
                      height="80"
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium pb-2">{title}</h2>
                    <p class="text-gray-500 italic text-xs">{date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
