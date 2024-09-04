import React from "react";
import imgSrc from '../../assets/shopping.jpg'

function Hero() {
  return (
    <div>
      <div>
        <section className="text-gray-600 body-fontm mt-10">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Before they sold out
                
              </h1>
              <p className="mb-8 leading-relaxed">
              Discover the latest in fashion, electronics, home essentials, and more. From trendsetting apparel and accessories to cutting-edge gadgets and cozy home decor, our curated collection has everything you need to elevate your lifestyle. Enjoy seamless shopping, fast delivery, and top-notch customer service as you explore the best deals and exclusive offers tailored just for you.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={imgSrc}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
