const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

class Api_Fetch {
    BASE_API;

    constructor(baseUrl) {
        this.BASE_API = baseUrl
    }

    instance = async (url, params = {}) => {
        const res = await fetch(`${this.BASE_API}${url}`, {
            headers: {
                Authorization: API_KEY
            }
        })
        const data = await res.json()
        return data
    }

    shop = {
        getAll: async() => {
            const data = await this.instance(`/shop?lang=ru`)
            return data
        }
    }
}

const api = new Api_Fetch(API_URL)

export {api}
