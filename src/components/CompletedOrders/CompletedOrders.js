"use client";

import { useEffect, useState } from "react";
import { getOrdersApi } from "../../api/order/orders";
import { ColorRing } from "react-loader-spinner";







export default function CompletedOrders() {
  const [orders, setOrders] = useState([]);
  const [user , setUser] = useState({})
  const [loading, setLoading] = useState(true);

  console.log(orders, "orders");

  useEffect(() => {
    getOrdersApi().then((res) => 
    {
      setOrders(res.data);
      setLoading(false);


    }).catch((error)=>{
      console.error("Error fetching orders:", error);
       setLoading(false);
    })
}, []);


useEffect(()=>{
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    setUser(localStorageUser)
}, [])



  return (
    <div className="min-h-[100vh] w-[85vw] m-auto mt-[30px]">
      { loading? (<ColorRing/>):(

        orders?.filter((item )=> item.status == "approved")
        .map((crt, i) => {
        return (
          <div
            key={i}
            className="  border-b-2 border-blue-300 flex  items-center justify-between px-[30px]"
          >
            <div  className="flex flex-col  w-[400px]">
              {crt.items.map((item, i) => (
                <div
                  className="flex   items-center gap-5 p-3 " 
                  key={i}
                >
                  <img
                    className="h-[70px] w-[70px]"
                    src={item.product.images[0]}
                    alt=""
                  />
                  <div className=" w-[350px] flex flex-col gap-3">
                    
                    <h1 className="text-sm font-bold">{item?.product?.name}</h1>
                    <div className="flex gap-5 text-gray-700 text-sm font-medium ">
                      <p>Size: {item.size}</p>
                      <p className="flex grow" >Quantity: {item.quantity}</p>
                      <p>Price: {item.product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ml-[150px] flex flex-col gap-4 items-end">
              <p className="font-bold text-sm">Sub-Total :{crt?.subtotal}</p>
              {user.isAdmin ? (
                <button  className="w-[100px] h-[40px] text-green-500 font-bold border-2 rounded-xl">
                 {crt.status == 'approved' ? 'approved' : crt.status } 
                </button>
              ) : (
                <h1 className="w-[100px] h-[40px] text-green-500 font-bold border-2  rounded-xl flex justify-center items-center">
                  completed  
                </h1>
              )}
            </div>
          </div>
        );
      }) 
      )
    }
    </div>
  );
}
