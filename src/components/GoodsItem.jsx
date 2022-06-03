function GoodsItem (props) {
    const { displayName, displayAssets, displayDescription, price, mainId } = props;

    return <div className="card">
        <div className="card-image blue-grey lighten-5">
            <img src={displayAssets[0].url}  alt={displayName}/>
        </div>
        <div className="card-content">
            <span className="card-title">{displayName}</span>
            <p>{displayDescription}</p>
        </div>
        <div className="card-action">
            <button className="btn blue-grey darken-2">Купить</button>
            <span>{price.finalPrice}</span>
        </div>
    </div>
}

export { GoodsItem }
