import Link from 'next/link';
import axios from 'axios';

// header에 보낼 인증토큰은 코드에 직접 쓰는 걸 권장하지 않음
// 1. Git 또는 그 외 버전 관리 시스템에 코드를 올리면 인증토큰이 노출되기 때문
// 2. 대부분의 경우 인증토큰은 애플리케이션이 작동하는 단계에 따라 달라짐
// 3. API 토큰값이 바뀌면 개별 코드나 각 HTTP 요청을 일일이 수정하지 않고 전체 앱에서 공유되는 환경 변수나 설정 파일을 통해 관리하는 것이 좋음
export async function getServerSideProps(ctx) {
    const { username } = ctx.query;
    const userReq = await axios.get(
        `${process.env.API_ENDPOINT}/api/04/users/${username}`,
        {
            headers: {
                Authorization: process.env.API_TOKEN,
            },
        }
    );

    if (userReq.status == 404) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            user: userReq.data,
        }
    };
}

function UserPage({ user }) {
    return (
        <div>
            <div>
                <Link href="/" passHref>
                    홈으로
                </Link>
            </div>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
        </div>
    );
}

export default UserPage;