import React, { useState, useEffect } from 'react'

import { Preloader } from '../components/Preloader'
import {GoodsList} from '../components/GoodsList'
import {Cart} from '../components/Cart/Cart'

import {api} from '../services/Api'

function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])

    const addToBasket = (item) => {
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
                    return item
                }
            });
            setOrder(newOrder)
        }

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
            <Cart  quantity = {order.length}/>
            {
                loading ? <Preloader /> :  <GoodsList goods={goods} addToBasket={addToBasket}/>
            }
        </main>
    )
}

export { Main }
