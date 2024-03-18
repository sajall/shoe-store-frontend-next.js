    import React, { useEffect, useState } from "react";
    import { getproductsApi } from "../../api/product/product";
    import { useRouter } from "next/router";
import { ColorRing } from "react-loader-spinner";




    export default function Category() {

    const brands =["Addidas" , "Service" , "Nike" , "Bata" , "pumma" ,"Spider" , "services"]

    const router = useRouter();
    const {categoryName} = router.query;
    console.log(categoryName , 'this is category name');

    const [products, setProducts] = useState([]);
    const [searchProd, setSearchProd] = useState([])
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        getproductsApi().then((res) => {

            setProducts(res.data);
            setLoading(false);

        }).catch((error)=>{

            console.log("error while fetching" , error );
            setLoading(false);
        })
    }, [])

    const filteredProducts = products.filter((prod)=> prod.category.toLowerCase() == categoryName);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchProd(searchTerm);
        console.log('Searching for:', searchTerm);
    };



    
    return(
        <>
    
        <div className="min-h-[100vh]">

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} >
        <div style={{ position: 'relative' }} >
            <input
            type="text"
            className="search-input"
            placeholder="Search..."
            onChange={handleSearch}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '800px' }}
            />

    <svg   style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
    </svg>
        </div>
        </div>


        {/* neechy wali  */}

        <div className="flex mt-10 gap-20">
            <div className="bg-slate-200 h-[400px] w-[300px] flex justify-center sticky top-20">
            <ul className="flex flex-col gap-5 border-b-2 cursor-pointer text-lg justify-center">
            {
                brands.map((brand , i)=>{
                return(
                    <li key={i}>{brand}</li>
                    )
                })
                }
            </ul>
        </div>


        <div className="flex flex-wrap gap-10 w-[1000px]">


        { loading ? (<ColorRing/>) :
        filteredProducts?.filter(product=>product.name.toLowerCase().includes(searchProd))?.map((prod , i)=>{
        return(

            <div key={i} className="w-[300px] h-[420px] gap-5 bg-white shadow-xl">
            <div>
            <img className="w-[100%] h-[90%]" src={prod.images[0]} alt="" />
            </div>
            <div className="p-[10px]">
            <p style={{ whiteSpace: 'pre', overflow: 'hidden', textOverflow: 'ellipsis' }} className="font-bold text-lg">{prod.name}</p>
            {prod.colors.map((col, i) => (
                <span key={i} className="text-sm">
                {col} /{" "}
                </span>
            ))}
            <div className="flex gap-5 justyfy-between">
                <span className="text-lg text-red-700 line-through">{prod.price}{"$"}</span>
                <span className="text-lg text-green-700 grow">{prod.discountedPrice}{"$"}</span>
                <span className="text-lg text-blue-700">5%</span>
            </div>
            </div>
        </div>


            )
            })

            }
        </div>
        </div>
        
        </div>
        </>
    )
    }
