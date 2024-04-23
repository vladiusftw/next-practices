import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://fakestoreapi.com',
})

// axios.interceptors.request.use((config) => {
//     return config
// })

// axios.interceptors.response.use((config) => {
//     return config
// })

export type ShopData = {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}

export const getShopItems = async (): Promise<ShopData[]> => {
    const data = await axios.get('/products')
    return data.data
}
