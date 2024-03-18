"use client";
import Link from 'next/link';

export default function Cards({ prod }) {
  const { images, name, colors, price, discountedPrice, _id } = prod;
  return (
    <Link href={`/home/product-details/${_id}`}>
      <div className="w-[350px] h-[450px] bg-white shadow-xl">
        <div>
          <img className="w-[100%] h-[90%]" src={images[0]} alt="" />
        </div>
        <div className="p-[10px]">
          <p style={{ whiteSpace: 'pre', overflow: 'hidden', textOverflow: 'ellipsis' }} className="font-bold text-lg">{name}</p>
          {colors.map((col, i) => (
            <span key={i} className="text-sm">
              {col} /{" "}
            </span>
          ))}
          <div className="flex gap-5 justyfy-between">
            <span className="text-lg text-red-700 line-through">{price}{"$"}</span>
            <span className="text-lg text-green-700 grow">{discountedPrice}{"$"}</span>
            <span className="text-lg text-blue-700">5%</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
