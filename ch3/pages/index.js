// import NavBar from '../components/Navbar';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Widget from '../components/Widget';

function Homepage() {
  const router = useRouter();

  // const handleClick = () => {
  //   router.push('/mypage');
  // };

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <div>
        <Link href='/about' passHref>
          About us
        </Link>
      </div>
      <div>
        <Widget pageName='index' />
      </div>
    </>
  );
}

export default Homepage;