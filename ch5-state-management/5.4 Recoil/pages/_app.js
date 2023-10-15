import Head from 'next/head';
import Navbar from '../components/Navbar';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <RecoilRoot>
        <Head>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        </Head>

        <Navbar />
        <div className="w-9/12 m-auto pt-10">
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </>
  );
}

export default MyApp;