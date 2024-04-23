import Axios from "axios";

const axios = Axios.create({
    baseURL:"https://fakestoreapi.com"
})

export type ShopData = {
    id:number;
    title:string;
    price:string;
    category:string;
    description:string;
    image:string
}

export const fetchData = async() : Promise<ShopData[]> => {
    const data = await axios.get("/products");
    return data.data;
}