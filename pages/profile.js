import Layout from '../components/layout';
import { mainLanguage } from '../lib/tech';
import { subLanguage } from '../lib/tech';

export default function Profile() {
  return (
    <Layout page="profile">
      <main className="bg-gray-700 shadow min-h-screen mt-8">
        <div className="pt-20 py-5  text-center text-white mx-auto">
          <ul className="md:w-1/2 mx-auto pb-10">
            <li className="flex items-center justify-center">
              <img src="images/faceimg.png" className="w-48 h-48 rounded-full " />
            </li>
            <li className=" text-lg font-italic text-center text-red-400">Yuto Nakai (bin)</li>
            <li className="text-base  font-italic leading-snug text-center text-gray-300">
              C#/TypeScript/JavaScript/Python Developer
            </li>
          </ul>
        </div>
        <div className="pt-20 py-5  text-center text-white">
          <p className="relative py-5 text-2xl md:text-4xl border-b w-1/2 mx-auto">経歴</p>
          <p className="w-3/4 md:w-1/2 lg:w-1/4 mx-auto text-lg md:text-xl leading-loose text-left text-gray-300 py-2">
            2016/4 -　京都大学 農学部 入学 <br />
            2020/3 - 京都大学　卒 <br />
            2020/4 - 大阪でエンジニアとして働いております。
          </p>
        </div>
        <div class="container px-5 mx-auto pt-20">
          <div class="flex flex-col text-center w-full mb-8 lg:mb-12 lg:mt-8">
            <p className="relative py-5 text-2xl md:text-4xl border-b w-1/2 mx-auto text-white ">
              自己紹介
            </p>
            <p className="text-lg md:text-xl leading-loose text-center text-gray-300 py-2">
              普段は大阪でエンジニアとして働いております。
              <br />
              変わったことが好きで、学生時代からアミューズメントバーでのディーラーや夜の街での配達業務等バイトをしてました。
              <br />
              趣味はゲーム(FPS)や個人開発で、今は猫と二人暮らしで自宅で個人開発と仕事を進めています。
              <br />
              好奇心旺盛で色んな技術を学習中。
            </p>
          </div>
        </div>
        <div class="container px-5 mx-auto pt-20">
          <div class="flex flex-col text-center w-full mb-8 lg:mb-12 lg:mt-8">
            <p className="relative py-5 text-2xl md:text-4xl border-b w-1/2 mx-auto text-white ">
              保有スキル
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            {mainLanguage.map(({ Name, Img }) => (
              <div class="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-gray-200">
                  <div class="w-16 h-16 bg-gray-100 mr-4 flex justify-center items-center">
                    <img
                      alt="team"
                      class="w-16 object-cover object-center flex-shrink-0"
                      src={Img}
                      width="64"
                      height="64"
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">{Name}</h2>
                    <p class="text-gray-500"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="flex flex-wrap w-full sm:mb-2 text-sm mt-8">
            {subLanguage.map(({ Name }) => (
              <div class="p-2 sm:w-1/4 w-1/2">
                <div class="flex h-full items-center">
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span class="title-font font-medium text-white">{Name}</span>
                </div>
              </div>
            ))}

            <div class="p-2 sm:w-1/4 w-1/2">
              <div class="flex h-full items-center">
                <span class="title-font font-medium">etc.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
