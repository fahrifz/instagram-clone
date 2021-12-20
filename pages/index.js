import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram Clone</title>
      </Head>
      <div className="bg-gray-50">
        <div className="sticky top-0">
          <Header />
        </div>
        <main className="lg:max-w-[60rem] md:max-w-[40rem] mx-auto">
          <Feed />
        </main>
      </div>
    </div>
  );
}
