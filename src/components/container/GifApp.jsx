import React, { useState } from "react";
import { AddCategory } from "../pure/AddCategory";
import { GifGrid } from '../pure/GifGrid'


const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  const handleResetCategory = () => {
    setCategories([]);
  }

  const handleDeleteCategory = (category) => {
    let index = categories.indexOf(category);
    const temple = [...categories];
    temple.splice(index, 1);
    setCategories(temple);
  }

  return (
    <>
      {/* Titulo */}
      <h1 className="title">GifApp</h1>

      {/* Input */}
      <AddCategory addCategory={handleAddCategory}
        resetCategories={handleResetCategory} />
      {/* Listado de Gif */}

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} dele={handleDeleteCategory} />

        ))

      }

    </>
  );
};

export default GifApp;