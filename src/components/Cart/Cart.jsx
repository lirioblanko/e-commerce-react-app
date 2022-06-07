import './cart.css';

export function Cart({
        quantity = 0,
        handleBasketShow = Function.prototype
}) {

    return (
        <div className="cart red lighten-2 white-text"
             onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {
                quantity && <span className="cart-quantity">{quantity}</span>
            }
        </div>
    )
}
