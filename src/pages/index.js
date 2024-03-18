
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Mainpage from "@/components/MainPage/Mainpage";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false})

export default function main() {
  return (
   <>
<Header/>
<Mainpage/>
<Footer/>

   
   </>
  );
}





