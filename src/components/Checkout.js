import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Cart from "./Cart";

export default function Checkout() {

    const { items } = useContext(CartContext);

    const totalprice = items.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    const Quantity = items.length;

    return (
        <section className="checkout">
            <h2>Checkout</h2>

{/* id para css */}

            <ul id="products" >
                {items.length > 0 ? (
                    items.filter(product => product.quantity > 0).map((product) => (
                        <li key={product.id}>
                            <Cart {...product} />
                        </li>
                    ))
                ) : (
                    <p>No items in cart!</p>
                )}
            </ul>

                <h1>
                    Valor total da compra: ${totalprice.toFixed(2)}
                </h1>
            <Link to="/" className="product-actions">
                <button>RETURN</button>
            </Link>
        </section>
    );
}