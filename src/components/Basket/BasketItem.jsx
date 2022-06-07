import {useState} from "react";

function BasketItem (props) {
    const {
            mainId, displayName, price, quantity,
            removeFromBasket=Function.prototype,
            addQuantity=Function.prototype,
            removeQuantity=Function.prototype
            } = props;

    const totalPrice = price.finalPrice * quantity

    return <li className="collection-item basket-item">
        <span className='basket-col'>{displayName}</span>
        <div className='basket-col'>
            <button onClick={()=> addQuantity(mainId)}>+</button>
            <span className='basket-count'>{quantity}</span>
            <button onClick={()=> removeQuantity(mainId)}>-</button>
        </div>
        <span className='basket-col rub'>{totalPrice}</span>
        <span className='secondary-content blue-grey-text' onClick={() => removeFromBasket(mainId)}> <i className="material-icons basket-delete ">delete</i></span>
    </li>
}

export { BasketItem }
