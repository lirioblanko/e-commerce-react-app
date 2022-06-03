import React, { useState, useEffect } from 'react'

import { Preloader } from '../components/Preloader'
import {GoodsList} from '../components/GoodsList'

import {api} from '../services/Api'

function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

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
            {
                loading ? <Preloader /> :  <GoodsList goods={goods}/>
            }
        </main>
    )
}

export { Main }
