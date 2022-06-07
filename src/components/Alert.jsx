import { useEffect } from "react";

function Alert(props) {
    const {name='', closeAlert=Function.prototype} = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)
        return () => {
            clearTimeout(timerId)
        }
    }, [name])

    return <div className='toast-container'>
        <div className='toast cart-toast-container blue-grey darken-2'>{name} добавлен в корзину</div>
    </div>
}

export { Alert }
