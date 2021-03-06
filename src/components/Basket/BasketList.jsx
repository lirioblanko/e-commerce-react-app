import { useMemo } from "react";
import { BasketItem } from './BasketItem'
import './basket.css';

function BasketList (props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        addQuantity=Function.prototype,
        removeQuantity=Function.prototype
    } = props;

    const totalPrice = useMemo(() => {
        return (
            order.reduce((sum, el) => {
                return sum + el.price.finalPrice * el.quantity
            }, 0)
        )
    }, [order])

    return <ul className="collection basket">
        <li className="collection-item basket-title red lighten-2 white-text active">
            Корзина
            <span className='secondary-content basket-close' onClick={handleBasketShow}><i className="material-icons">clear</i></span>
        </li>
        {
            order.length ? order.map(item => {
                return <BasketItem
                    key={item.mainId}
                    {...item}
                    removeFromBasket={removeFromBasket}
                    addQuantity={addQuantity}
                    removeQuantity={removeQuantity}
                />
            }) : <li className="collection-item">В корзине нет товаров</li>
        }
        <li className="collection-item basket-title red lighten-2 white-text active">Общая стоимость
        <span className='secondary-content rub'>{totalPrice}</span></li>
    </ul>
}

export { BasketList }
