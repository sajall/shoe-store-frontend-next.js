"use client";
import { useEffect, useState } from 'react';
import  Cards from '../Cards/Cards';
import Shoeswiper from '../Shoeswiper/Shoeswiper';
import { getproductsApi } from '../../api/product/product';
import { ColorRing } from 'react-loader-spinner';

export default function Home({ }) {

  const [products, setProducts] = useState([])
  const [loading , setLoading] = useState(true);
 

  useEffect(() => {
    getproductsApi().then((res) =>{
      
      setProducts(res.data);
      setLoading(false);

    }).catch((error)=>{

      console.log("Error while fetching products" , error);
      setLoading(false);

    })
  }, [])

  return (
    <>
      <img src="Banner.webp" alt="" />

      <div className='flex gap-5 text-center justify-around font-bold text-lg'>
      
        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Addidas</span>
        </div>
        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe2.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Nike</span>

        </div>

        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe3.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Bata</span>

        </div>
        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Service</span>

        </div>
      </div>
      <h1 className='mt-[120px] font-bold text-2xl'></h1>
      <Shoeswiper products={products} />

      <div className='flex flex-wrap gap-5 justify-center'>
        { loading? (<ColorRing/>) :
        products.map((prod, i) => {
          return (<Cards key={i} prod={prod}></Cards>)  
        })}


      </div>

    </>
  )
}