export default function MenuPasta() {
    return (
      <section >
        <div className="bg-gray-200 p-4 rounded-lg text-center
          hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all ">
          <div className="text-center">
           <img className="max-h-auto max-h-44 block mx-auto"
           src="/pasta1.webp" alt="pizza" /> 
          </div>
          <h4 className="font-semibold my-3 text-xl ">PASTA WITH MARINARA SAUCE</h4>
          <p className="text-gray-900 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisi
          </p>
          <button className="bg-orange-500 text-white rounded-full px-4 py-2 mt-4">
            Add to cart 12$
          </button>
        </div>
        <br />
        <div className="bg-gray-200 p-4 rounded-lg text-center
          hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all ">
          <div className="text-center">
           <img className="max-h-auto max-h-44 block mx-auto"
           src="/pasta2.webp" alt="pizza" /> 
          </div>
          <h4 className="font-semibold my-3 text-xl ">PASTA WITH ALFREDO SAUCE </h4>
          <p className="text-gray-900 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisi
          </p>
          <button className="bg-orange-500 text-white rounded-full px-4 py-2 mt-4">
            Add to cart 15$
          </button>
        </div>
      
      </section>
    );
  }
  