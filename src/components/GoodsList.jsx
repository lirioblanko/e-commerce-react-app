import { GoodsItem } from './GoodsItem'

function GoodsList (props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    return <div className='goods-list'>
        { goods.length ? goods.map(item => {
            return <GoodsItem key = {item.mainId} { ...item} addToBasket={addToBasket}/>
        }) : <h4>404 ошибка</h4> }
    </div>
}

export { GoodsList }
