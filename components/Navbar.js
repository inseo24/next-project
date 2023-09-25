import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <Link href="/posts/2023-09-25/seoin">Seoin's post</Link>
            <Link href="/posts/2023-09-24/seo">Seo's post</Link>
        </div>
    );
}

export default Navbar;