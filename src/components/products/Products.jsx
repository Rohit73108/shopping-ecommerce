import React from "react";
import { Link } from 'react-router-dom';

function Products({ products=[]}) {
  return (
      <section className="text-gray-800 body-font mb-1">
        <div className="container px-0 py-2 mx-auto">
          <div className="flex flex-wrap m-4">
            {  
                products?.map((val) => {
              return (
                <Link to={`/product/${val.id}`} className="lg:w-1/4 md:w-1/2 p-4 border-[2px] mb-6 cursor-pointer" key={val.id} >
                  <a className="block relative h-48 rounded overflow-hidden shadow-md ">
                    <img
                      alt={val.title}
                      className="object-contain object-center w-full h-full block"
                      src={val.image}
                    />
                  </a>
                  <div className="mt-5">
                    <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1 uppercase">
                      {val.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {val.title}
                    </h2>
                    <p className="mt-1">₹{val.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section> 
  );
}

export default Products;
