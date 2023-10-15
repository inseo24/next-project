import { useRecoilState } from 'recoil';
import { cartState } from '../atom/cartState';

function ProductCard({ id, name, price, picture }) {
    const [cart, setCart] = useRecoilState(cartState);
    const productAmount = cart?.[id] ?? 0;

    const handleIncrement = () => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1,
        }));
    };

    const handleDecrement = () => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: Math.max((prevCart[id] || 0) - 1, 0),
        }));
    };

    return (
        <div className="bg-gray-200 p-6 rounded-md">
            <div className="relative 100% h-40 m-auto">
                <img src={picture} alt={name} className="object-cover" />
            </div>
            <div className="flex justify-between mt-4">
                <div className="font-bold text-l"> {name} </div>
                <div className="font-bold text-l text-gray-500"> ${price} per kg </div>
            </div>
            <div className="flex justify-between mt-4 w-2/4 m-auto">
                <button
                    className="pl-2 pr-2 bg-red-400 text-white rounded-md"
                    disabled={productAmount === 0}
                    onClick={() => handleDecrement()}>
                    -
                </button>
                <div>{productAmount}</div>
                <button
                    className="pl-2 pr-2 bg-green-400 text-white rounded-md"
                    onClick={() => handleIncrement()}>
                    +
                </button>
            </div>
        </div>
    );
}

export default ProductCard;