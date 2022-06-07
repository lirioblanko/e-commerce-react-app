function BasketItem (props) {
    const { mainId, displayName, price, quantity, removeFromBasket=Function.prototype } = props;
    const totalPrice = price.finalPrice * quantity

    return <li className="collection-item basket-item">
        <span className='basket-col'>{displayName}</span>
        <span className='basket-col'>{quantity}</span>
        <span className='basket-col rub'>{totalPrice}</span>
        <span className='secondary-content blue-grey-text' onClick={() => removeFromBasket(mainId)}> <i className="material-icons basket-delete ">delete</i></span>
    </li>
}

export { BasketItem }
