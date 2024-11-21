import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Cart({ id, thumbnail, title, price, quantity }) {

    const { addItemToCart, subItemToCart } = useContext(CartContext);

    return (
        <div>
            <div id="cart-items">
                <img src={thumbnail} alt={thumbnail}/>
                    <h2>{title}</h2>
                    <h2>${price}</h2>
                    <label>Preço Total: ${(price*quantity).toFixed(2)}</label>
                    <div>
                        <button className="button-more-less" onClick={() => subItemToCart(id)}>-</button>
                        <h2>{quantity}</h2>
                        <button className="button-more-less" onClick={() => addItemToCart(id)}>+</button>
                    </div>
                    
            </div>
            {/* Condição para ver se é > 0 o qtd de itens
        Se for maior redenriza em checkout, se não, não redenriza*/}
        </div>
    );
}