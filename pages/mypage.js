import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import useAuth from '../hooks/auth';

function MyPage() {
    const router = useRouter();
    const { loggedIn } = false;

    useEffect(() => {
        if (!loggedIn) {
            router.push('/login');
        }
    }, [loggedIn]);

    return loggedIn ? <div>My page</div> : null;
}

export default MyPage;
// router.push()를 사용하여 페이지 이동
