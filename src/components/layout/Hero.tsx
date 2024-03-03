import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:grid grid-cols-2 justify-center items-center mt-32 md:mt-8 ">
      <div className=" md:py-4 md:ml-16 ">
      
        <h1 className=" text-4xl font-semibold ">
          Everything <br />
          is better <br />
          with a<span className="text-orange-500 p-2">Pizza </span>
        </h1>
        <Image
          className=" mr-0 -mt-48 mx-auto md:hidden"
          src={"/imgs/Logo.png"}
          alt=""
          width={150} height={50}
          
        ></Image>
        
        
        <div className=" md:flex">
          <p className="flex  my-6 text-gray-500 text-sm">
            Welcome to Pinheiro Ferraço restaurant where passion meets flavor.
            dolor sit amet, consectetur adipisicing elit. Quisquam voluptatem,
            quo ratione quod officiis dolorum similique alias.
          </p>
        </div>

        <div className="flex flex-col gap-4  md:flex-row  items-center justify-center mt-16   text-center
        
        ">
          <button
            className="flex gap-2 justify-center 
          items-center bg-orange-500  text-white  rounded-2xl w-48 "
          >
            <Link href={"/menu"}>Order now</Link>
            <ArrowRightCircle className="w-5" />
          </button>
          <div
            className=" md:flex gap-2 items-center py-2 text-gray-500 font-semibold  w-52 
          "
          >
            <Link href={"/menu"}>Learn more</Link>
           
          </div>
        </div>
      </div>

      <div
        className="hidden md:block
       justify-center items-center mx-auto"
      >
        <Image
          className="absolute"
          src={"/imgs/Logo-2.png"}
          alt=""
          width={350} height={150}
          
        ></Image>
        <Image
          className="hover:animate-pulse"
          src={"/imgs/pizza.webp"}
          alt={"pizza"}
          width={350} height={150}
          
        />
        
      </div>
    </section>
  );
}
