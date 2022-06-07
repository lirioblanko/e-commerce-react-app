import { BasketItem } from './BasketItem'
import './basket.css';

function BasketList (props) {
    const {order = [], handleBasketShow = Function.prototype} = props;

    return <ul className="collection basket">
        <li className="collection-item basket-title red lighten-2 white-text active">
            Корзина
            <span className='secondary-content basket-close' onClick={handleBasketShow}><i className="material-icons">clear</i></span>
        </li>
        {
            order.length ? order.map(item => {
                return <BasketItem key={item.mainId} {...item} />
            }) : <li className="collection-item">В корзине нет товаров</li>
        }
        <li className="collection-item basket-title red lighten-2 white-text active">Общая стоимость:</li>
    </ul>
}

export { BasketList }
