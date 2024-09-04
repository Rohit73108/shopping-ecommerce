import React, { useEffect, useState } from "react"; 
import Features from "../features/Features";

function Categories() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategory(data);
    };
    fetchCategory();
  }, []);
  return (
    <Features cards={category} />
  );
}

export default Categories;
