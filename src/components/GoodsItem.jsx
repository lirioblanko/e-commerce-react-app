function GoodsItem (props) {
    const { displayName, displayAssets, displayDescription, price, mainId, addToBasket = Function.prototype } = props;

    return <div className="card">
        <div className="card-image blue-grey lighten-5">
            <img src={displayAssets[0].url}  alt={displayName}/>
        </div>
        <div className="card-content">
            <span className="card-title">{displayName}</span>
            <p>{displayDescription}</p>
        </div>
        <div className="card-action">
            <button className="btn blue-grey darken-2"
                onClick={() =>
                    addToBasket({
                        mainId,
                        displayName,
                        price
                    })
                }
            >Купить</button>
            <span className='rub'>{price.finalPrice}</span>
        </div>
    </div>
}

export { GoodsItem }
