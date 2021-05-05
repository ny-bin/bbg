import Layout from '../components/layout';
import { mainLanguage } from '../lib/tech';
import { subLanguage } from '../lib/tech';

export default function Work() {
  return (
    <Layout>
      <main className="bg-gray-700 shadow min-h-screen mt-8">
        <div className="container px-5 mx-auto pt-20">
          <div class="flex flex-col text-center w-full mb-8 lg:mb-12 lg:mt-8">
            <p className="relative py-5 text-2xl md:text-4xl border-b w-1/2 mx-auto text-white ">
              作成中
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
