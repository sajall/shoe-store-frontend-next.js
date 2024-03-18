"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCart } from "../../redux/slices/CartSlice";
import { getSingleProductApi } from "../../api/product/product";


export default function ProductDetails() {
  const dispatch = useDispatch();

  const router = useRouter();
  const { productId } = router.query;

  const [singleProduct, setSingleProduct] = useState({});
  const findProduct = async () => {
    try {
      const res = await getSingleProductApi(productId);
      if (res.status == 200) {
        setSingleProduct(res.data);
      }
    } catch (err) {
      console.log(err, "some error occoured");
    }
  };

  useEffect(() => {
    findProduct();
  }, []);

  const [selectedImage, setSelectedImage] = useState(0);

  const [selectedSize, setSelectedSize] = useState();

  const selectedSizeStyle = `border-2 border-black bg-black text-white w-[80px] h-[30px]`;

  const [qty, setQty] = useState(1);

  const addToCart = () => {
    const objToDispatch = {
      size: selectedSize,
      quantity: qty,
      product: singleProduct,
    };
    if(objToDispatch.size){
      
      dispatch(setCart(objToDispatch));
      router.push('/cart');

    }else{

      toast.warning("please select a size")
    }
  };

  const images = singleProduct?.images || [];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <>
      {singleProduct ? (
        <>
          <div className="min-h-[600px] flex items-center">
            {/* image wali div */}
            <div className="w-[50%] flex gap-7 justify-center ">
              <div className=" flex flex-col gap-3">
                {singleProduct &&
                  images?.map((item, i) => (
                    <img
                    key={i}
                      alt={`Product ${i + 1}`}
                      onClick={() => handleImageClick(i)}
                      className="w-[100px] "
                      src={item}
                    />
                  ))}
              </div>
              <div>
                <img
                  className="w-[400px] h-[400px]"
                  src={images[selectedImage]}
                  alt={`Product ${selectedImage + 1}`}
                />
              </div>
            </div>
            {/* dussri wali div */}

            <div className="w-[50%]">
              <div>
                <h1 className="text-2xl font-bold">{singleProduct?.name}</h1>
                {singleProduct &&
                  singleProduct?.colors?.map((col, i) => (
                    <span key={i} className="text-lg font-bold">
                      {col} /{" "}
                    </span>
                  ))}
                <br />
                <span className="text-lg text-red-700 line line-through">
                  {" "}
                  price ${singleProduct.price}
                </span>
                <span className="text-lg text-green-700 grow ml-6">
                  price:${singleProduct.discountedPrice}
                </span>
              </div>

              <div className="flex flex-col gap-3 mt-10 ">
                <h3 className="text-2xl font-bold">Select size</h3>
                <div className="w-[400px] flex flex-wrap gap-3">
                  {singleProduct &&
                    singleProduct?.sizes?.map((size, i) => (
                      <button
                        onClick={() => setSelectedSize(size)}
                        key={i}
                        className={
                          selectedSize == size
                            ? selectedSizeStyle
                            : "border-2 border-black  w-[80px] h-[30px]"
                        }
                        updated
                      >
                        {size}
                      </button>
                    ))}
                </div>
                <div className="flex justify-start items-center  gap-3 w-[350px]">
                  <span className="font-bold">Quantity:</span>
                  <button
                    className="border-2 w-[30px] h-[30px]  text-2xl bg-black text-white"
                    onClick={() => setQty(qty - 1)}
                  >
                    -
                  </button>
                  {qty}
                  <button
                    className="border-2 w-[30px] h-[30px] text-2xl bg-black text-white"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
                {/* <Link href="/cart"> */}
                  <button
                    onClick={addToCart}
                    className="border-2 w-[360px] h-[40px] rounded-3xl  bg-black text-white"
                  >
                    Add to Cart
                  </button>
                {/* </Link> */}
                <Link href="/online-payment">
                  <button className="border-2 w-[360px] h-[40px] rounded-3xl  bg-black text-white">
                    Online Pyment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Loading ..."
      )}
    </>
  );
}
