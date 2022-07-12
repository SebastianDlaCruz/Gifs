import React, { useState } from "react";
import { AddCategory } from "../pure/AddCategory";
import { GifGrid } from '../pure/GifGrid'
import ListCategory from "../pure/listCategory";

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
      <h1 className="title" id="titulo">GifApp</h1>

      {/* Input */}
      <AddCategory addCategory={handleAddCategory}
        resetCategories={handleResetCategory} />
      {/* Listado de Gif */}

      <ListCategory name={categories} dele={handleDeleteCategory} />

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))

      }
      <a href="#titulo" className="top">top</a>
    </>
  );
};

export default GifApp;