import Head from "next/head";
import { FiPhoneCall } from "react-icons/fi";
import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Services } from "../components/services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>მკერდის მასაჟი</title>
        <meta
          name="description"
          content="მკერდის მასაჟი მძუძური დედებისთვის და კონსულტაცია ლაქტაციაზე"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-gradient-to-r from-transparent to-blue-50">
        <div className="container flex items-center justify-between h-20">
          <div>
            <h1 className="text-2xl text-indigo-500">მკერდის მასაჟი</h1>
          </div>
          <div>
            <a
              className="flex items-center gap-3 text-slate-500 hover:text-slate-900"
              href="tel:593227050"
            >
              <FiPhoneCall />
              593 22 70 50
            </a>
          </div>
        </div>
      </div>

      <main>
        <div className="mb-52">
          <Hero/>
        </div>
        <div className="mb-60">
          <About />
        </div>
        <div className="my-64">
          <Services />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
