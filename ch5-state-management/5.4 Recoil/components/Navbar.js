import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { cartState } from '../atom/cartState';

function useGlobalItems() {
    return useRecoilValue(cartState);
}

function Navbar() {
    const items = useGlobalItems();
    const totalItemsAmount = Object.keys(items)
        .map((key) => items[key])
        .reduce((a, b) => a + b, 0);

    return (
        <div className="w-full bg-purple-600 p-4 text-white">
            <div className="w-9/12 m-auto flex justify-between">
                <div className="font-bold">
                    <Link href="/" passHref>
                        My e-commerce
                    </Link>
                </div>
                <div className="font-bold underline">
                    <Link href="/cart" passHref>
                        {totalItemsAmount} items in cart
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;