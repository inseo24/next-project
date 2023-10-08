import { useRouter } from 'next/router';

function GreetPage() {
    const { query } = useRouter();

    return <div> hi, {query.name}!</div>
}

export default GreetPage;

