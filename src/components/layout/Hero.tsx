import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";


export default function Hero() {
  return (
    <section className="hero mt-8">
      
      <div className="py-12 ">
        
        <h1 className="text-4xl font-semibold flex">
          Everything <br />
          is better <br />
          with a{""}
          <span className="text-orange-500">
           {""} Pizza </span>
          
        </h1>
        <div>
          
          <p className="my-6 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ex
          doloremque est, tempora voluptatem sit ea sequi voluptas ratione natus
          repellat quasi dolores ipsum veritatis alias amet, officiis
          perspiciatis quibusdam.
        </p>
        </div>
       
        <div className="flex gap-4">
          <button
            className="flex gap-2 justify-center 
          items-center bg-orange-500  text-white  rounded-full"
          >
            Order now
            <ArrowRightCircle className="w-5" />
          </button>
          <button
            className="flex gap-2 items-center py-2 text-gray-500 font-semibold
          border-0"
          >
            Learn more
            <ArrowRightCircle className="w-5" />
          </button>
          
        </div>
      </div>

      <div className="relative justify-center items-center">
        <Image
          className="hover:animate-pulse "
          src={"/pizza.webp"}
          alt={"pizza"}
          objectFit="contain"
          layout="fill"
        />
        <Image className="absolute" 
        src={"/imgs/Logo-2.png"} alt=""
          objectFit="contain" layout="fill" >
           
        </Image>
      </div>
    </section>
  );
}
