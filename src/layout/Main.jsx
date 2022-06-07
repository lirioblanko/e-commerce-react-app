import React, { useState, useEffect, useCallback } from 'react'
import { useToggle } from '../hooks/useToggle'

import { Preloader } from '../components/Preloader'
import {GoodsList} from '../components/GoodsList'
import {Cart} from '../components/Cart/Cart'
import {BasketList} from "../components/Basket/BasketList";
import {Alert} from "../components/Alert";

import {api} from '../services/Api'

function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, handleBasketShow] = useToggle(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket =  (item) => () => {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            });
            setOrder(newOrder)
        }
        setAlertName(item.displayName)
    }

    const removeFromBasket = (itemId) => () => {
        const newOrder = order.filter(el => el.mainId !== itemId)
        setOrder(newOrder)
    }

    const addQuantity = (itemId) => () => {
        const newOrder = order.map(el => {
            if (el.mainId === itemId) {
               const newQuantity = el.quantity + 1;
               return {
                   ...el,
                   quantity: newQuantity
               }
            } else {
                return el;
            }

        })
        setOrder(newOrder)
    }

    const removeQuantity = (itemId) => () => {
        console.log(itemId)
        const newOrder = order.map(el => {

            if (el.mainId === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder)
    }

    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(() => {
        api.shop.getAll()
            .then(data => {
                data.shop && setGoods(data.shop);
                setLoading(false)
            })
            .catch(err => {
                setLoading(true)
            })
         }, [])

    return (
        <main className='container content'>
            <Cart  quantity = {order.length} handleBasketShow={handleBasketShow}/>
            {
                alertName && <Alert
                    name={alertName}
                    closeAlert={closeAlert}
                />
            }
            {
                isBasketShow && <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    addQuantity={addQuantity}
                    removeQuantity={removeQuantity}
                />
            }
            {
                loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />
            }
        </main>
    )
}

export { Main }
