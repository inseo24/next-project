import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
  const userRequest = await axios.get(
    `${process.env.API_ENDPOINT}/api/04/users`
  );
  return {
    props: {
      users: userRequest.data,
    }
  }
}

function Homepage({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Homepage; 