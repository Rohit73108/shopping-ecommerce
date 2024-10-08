import React, { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Cart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.length) return <div>Cart is empty...</div>;
  let [total , setTotal]=useState(0)

  useEffect(()=>{
    
    const total=cart.reduce((acc , item)=>{
      return acc+(item.price * item.quantity)
    },0)
    setTotal(total)
  },[cart])
  const navigate=useNavigate()
  let handleInc=(id)=>{
     const updatedCart = cart.map(item =>{
      if(item.id===id){
        return {
          ...item , quantity:item.quantity+1
        }
      }
      return item
     })
     localStorage.setItem('cart', JSON.stringify(updatedCart))
     navigate('/cart')
  }
  let handleDec=(id)=>{
    const updatedCart = cart.map(item =>{
      if(item.id===id){
        if(item.quantity>1) return {
          ...item , quantity:item.quantity-1
        }
      }
      return item
     })
     localStorage.setItem('cart', JSON.stringify(updatedCart))
     navigate('/cart')
  }

  let RemoveProduct=(id)=>{
    const updatedCart=cart.filter(item => item.id !==id)
    console.log(updatedCart);
    
    localStorage.setItem('cart' , JSON.stringify(updatedCart))
    navigate('/cart')

  }

  
  return (
    <div>
     <div className="h-auto bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items {cart.length} </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart?.map((item, index) => {
            return (
              <div
                key={index}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <br/>
                    <h2 className="text-lg font-bold text-gray-900">title: {item.title}</h2>
                    <h2 className="text-lg font-bold  text-red-600 ">{item.category}</h2>
                    
                    
                    <h2 className="text-lg font-bold text-gray-900 justify-end"> <FcRating/>{item.rating.rate}/5</h2>
                    <button className="text-sm text-red-500" onClick={()=>{RemoveProduct(item?.id)}}>Remove</button>
                    <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>{handleDec(item?.id)}}>
                        -
                      </button>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={item.quantity}
                        min="1"
                      />
                      <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>{handleInc(item?.id)}}>
                        +
                      </button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">Price:{item.price}₹</p>
                    </div>
                  </div>
                </div>
              </div>
              
            );
          })}
        </div>
        {/* Subtotal */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">₹{(total).toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">₹
            4</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">₹{(total+4).toFixed(2 )}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Cart;
