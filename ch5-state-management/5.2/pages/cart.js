// eslint-disable-next-line no-unused-vars
import data from '../data/items';
import { useContext } from 'react';
import cartContext from '../components/context/cartContext';

function getFullItem(id) {
    const idx = data.findIndex((item) => item.id === id);
    return data[idx];
}

function Cart() {
    const { items } = useContext(cartContext);
    const total = Object.keys(items)
        .map((id) => getFullItem(id).price * items[id])
        .reduce((a, b) => a + b, 0);

    const amounts = Object.keys(items).map((id) => {
        const item = getFullItem(id);
        return { item, amount: items[id] };
    });

    return (
        <div>
            <h1 className="text-xl font-bold"> Total: ${total} </h1>
            <div>
                {amounts.map(({ item, amount }) => (
                    <div key={item.id}>
                        x{amount} {item.name} (${amount * item.price})
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;