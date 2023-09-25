// http://localhost:3001/greet/seoin
// getServerSideProps 함수는 반드시 객체를 반환해야 함 < ? 왜? >
export async function getServerSideProps({ params }) {
    const { name } = params;
    return {
        props: {
            name
        }
    };
}

function GreetPage({ name }) {
    return <div> hi, {name}! I'm Seoin!</div>
}

export default GreetPage;

