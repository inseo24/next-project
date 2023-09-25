// import NavBar from '../components/Navbar';
import { useRouter } from 'next/router';

function Homepage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/mypage');
  };

  return (
    <div>
      <button onClick={handleClick}>Go to My Page</button>
    </div>
  );
}

export default Homepage;