import React from 'react'
import { useRouter } from 'next/router'
const products = [
    {
        id: 100,
        img: "https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_UY218_.jpg",
        title: "Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys",
        price: 39.99,
        rating: 4,
    },
    {
        id: 101,
        img: "https://m.media-amazon.com/images/I/71pzrs70x4L._AC_UL320_.jpg",
        title: "MASTERTOP 20PCS Vacuum Storage Bags",
        price: 2,
        rating: 4
    },
    {
        id: 102,
        img: "https://images-na.ssl-images-amazon.com/images/I/41k21rsIfzS.jpg",
        title: "Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H",
        price: 1299,
        rating: 5
    },
    {
        id: 103,
        img: "https://m.media-amazon.com/images/I/81XvEK3g4KL._AC_UL320_.jpg",
        title: "PowerColor Red Devil AMD Radeon RX 6600 XT Gaming Graphics Card with 8GB GDDR6 Memory",
        price: 880,
        rating: 3
    },
    {
        id: 104,
        img: "https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_UY218_.jpg",
        title: "Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys ",
        price: 39.99,
        rating: 4
    },
    {
        id: 105,
        img: "https://m.media-amazon.com/images/I/71pzrs70x4L._AC_UL320_.jpg",
        title: "MASTERTOP 20PCS Vacuum Storage Bags",
        price: 2,
        rating: 4
    }
]


const Post = () => {

    const router = useRouter()
    const { id } = router.query

    const product = products.filter(product => product.id == id)
    console.log(product)

    return (
        <div className='flex  flex-col justify-center items-center h-screen'>
            <img className='m-4' src={product[0].img} alt="" />
            <h1 className=" m-4 font-bold"> Product Title: {product[0].title}</h1>
            <h3 className='m-4'>Price: {product[0].price}</h3>
        </div>
    )
}

export default Post
