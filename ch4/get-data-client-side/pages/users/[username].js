import { useEffect, useState } from "react";
import Link from "next/link";

export async function getServerSideProps({ query }) {
    const { username } = query;

    return {
        props: {
            username,
            authorization: process.env.API_TOKEN,
        }
    }
}

function UserPage({ username }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {

        async function fetchData() {
            const req = await fetch(`/api/singleUser?username=${username}`);
            const data = await req.json();

            setLoading(false);
            setData(data);
        }
    }, [])

    return (
        <div>
            <div>
                <Link href="/" passHref>
                    홈으로
                </Link>
                <hr />
                {loading && <div>로딩중...</div>}
                {data && <UserData user={data} />}
            </div>
        </div>
    );
}

function UserData({ user }) {
    return (
        <div style={{ display: 'flex' }}>
            <img src={user.profile_picture} alt={user.username} style={{ width: '200px' }} />
            <div>
                <div>
                    <b>Username:</b> {user.username}
                </div>
                <div>
                    <b>Full name:</b> {user.first_name} {user.last_name}
                </div>
                <div>
                    <b>Email:</b> {user.email}
                </div>
                <div>
                    <b>Company:</b> {user.company}
                </div>
                <div>
                    <b>Job title:</b> {user.job_title}
                </div>
            </div>
        </div>
    )
}

export default UserPage;