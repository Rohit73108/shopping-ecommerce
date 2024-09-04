import React, { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import Products from "./products/Products";
import Features from "./features/Features";
import StatCard from "./statCard/StatCard";
import Categories from "./categories/Categories";
function Home() {
    const [products , setProducts]=useState([])

    useEffect(()=>{
        const fetchProducts=async()=>{
           const response=await fetch("https://fakestoreapi.com/products");
           const data=await response.json()
           setProducts(data)
        }
        fetchProducts()
    },[])
  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR
        </h1>
      </div>
      {
        products.length>0 ?
        <Products products={products}/>:
        <div>Loading....</div>
      }
      <Products/>
      <StatCard/>
    </>
  );
}

export default Home;
