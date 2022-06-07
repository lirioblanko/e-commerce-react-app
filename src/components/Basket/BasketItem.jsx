function BasketItem (props) {
    const { mainId, displayName, price, quantity } = props;

    return <li className="collection-item">
        {displayName} * {quantity} = {price.finalPrice}
        <span className='secondary-content blue-grey-text'> <i className="material-icons basket-delete ">delete</i></span>
    </li>
}

export { BasketItem }
