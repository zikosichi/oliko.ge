import Head from "next/head";
import { FiPhoneCall } from "react-icons/fi";
import { About } from "../components/about";
import { H1 } from "../components/typography";

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

      <div className="bg-blue-50">
        <div className="container flex items-center justify-between h-20">
          <div>
            <a
              className="flex items-center gap-3 text-slate-500 hover:text-slate-900"
              href="tel:593227050"
            >
              <FiPhoneCall />
              593 22 70 50
            </a>
          </div>
          <div>
            <h1 className="text-2xl text-indigo-500">მკერდის მასაჟი</h1>
          </div>
          <div>info</div>
        </div>
      </div>

      <main>
        <div className="container py-20">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <img className="rounded-3xl" src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
            </div>
            <div>
              <h2 className="text-3xl leading-loose text-indigo-600">ოლიკო ჯინჭარაძე</h2>
              <p className="text-2xl text-gray-700 mb-11">ექთანი მასაჟისტი</p>

              <H1 className="mb-14">მკერდის მასაჟი და კონსულტაცია ლაქტაციასა და ბავშვის მოვლაზე</H1>

              <a href="tel:593227050">
                <button className="bg-[#667EF6] mb-3 rounded-full flex items-center py-3 px-7 gap-2 text-white">
                  <FiPhoneCall />
                  დაჯავშნე ვიზიტი
                </button>
              </a>

              <p className="text-lg text-gray-400 mb-11">კონსულტაცია უფასოა</p>
            </div>
          </div>
        </div>

        <div className="my-64">
          <About/>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
