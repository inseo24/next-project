import Head from 'next/head';
import Link from 'next/link';
import Widget from '../components/Widget';

function AboutPage() {
    return (
        <>
            <Head>
                <title>About this website</title>
            </Head>
            <div>
                <h1>About</h1>
                <Link href="/">Back to Home</Link>
            </div>
            <div>
                <Widget pageName='about' />
            </div>
        </>
    );
}

export default AboutPage;