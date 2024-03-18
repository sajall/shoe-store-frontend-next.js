import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TfiShoppingCart } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const catg = ["Brands", "Bata", "Gucci", "Addidas", "Nike"];
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [mydropdown, setMydropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState(0);

  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    setCartItems(cart.length);
  }, [cart]);

  const showDropdown = () => {
    setMydropdown((prev) => !prev);
  };

  function onChangeCategory(value) {
    router.push(`/category/${value.toLowerCase()}`);
  }

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    setUser(localStorageUser);
  }, []);

  return (
    <header className="flex justify-around shadow-lg shadow-gray-300 box-border">
      <div className=" flex items-center w-[60%]">
        <img src={"/" + "logo.webp"} alt="" />
        <ul className="flex list-none gap-[20px] pointer">
          {!user ? (
            <Link href="/login">
              <li>Log in</li>
            </Link>
          ) : null}
          {user ? <Link href="/home">Home</Link> : null}
          {user ? (
            <Link href="/completed-orders">
              <li>
                <b>Completed Orders</b>
              </li>
            </Link>
          ) : null}
          {user ? (
            <Link href="/pending-orders">
              <li>Pending Orders</li>
            </Link>
          ) : null}
        </ul>
        {user ? (
          <select
            onChange={(event) => {
              onChangeCategory(event.target.value);
            }}
            className="p-2 text-black bg-white  rounded-md  border appearance-none focus:border-indigo-600 ml-3"
          >
            {catg.map((flv) => (
              <option key={flv} value={flv}>
                {flv}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <div className="w-[450px]  bg-white  flex items-center ">
        <ul className=" flex justify-around items-center list-none w-full">
          {user && user.isAdmin ? (
            <li>
              <button className="w-[80px] h-[40px] grow  rounded-lg border border-green-700 ">
                {"Admin"}
              </button>
            </li>
          ) : null}

          {user && !user.isAdmin ? (
            <span className="text-lg text-bold">Welcome back, {user.name}!</span>
          ) : null}

          {user ? (
            <li className="flex">
              {" "}
              <button
                onClick={() => {
                  localStorage.clear();
                  router.push("/");
                }}
              >
                <b className="text-lg">Log out</b>
              </button>{" "}
              {user ? (
                <img className=" " src={"/" + "user.png"} alt="" />
              ) : null}
            </li>
          ) : null}
        </ul>
        <TfiShoppingCart
          onClick={() => {
            router.push("/cart");
          }}
          className="w-[30px] h-[30px] ml-[0px] cursor-pointer relative "
        />
        <span className="absolute top-[15px] right-[30px] bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartItems}
        </span>
      </div>
    </header>
  );
};

export default Header;
