import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { useGetCategories } from "../hooks/useProducts";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");

  const { categories } = useGetCategories();

  const handleFieldReset = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setThumbnail("");
    setCategory("");
  };

  const handleCreateProduct = () => {
    const data = {
      title,
      description,
      price,
      thumbnail,
      category,
    };
    const db = getFirestore();

    if (title === '' || description === '' || price === '' || thumbnail === '' || category === '') {
      Swal.fire({
        icon: "warning",
        title: "Alerta",
        text: "Debe completar todos los campos",
      });
      return;
    }

    const productCollection = collection(db, "products");
    addDoc(productCollection, data).then(({ id }) => {
      Swal.fire({
        icon: "success",
        title: "Producto Creado con Exito",
      });
      handleFieldReset();
    });
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "450px", marginTop: "1.5rem", marginBottom: "1.5rem" }}>Crear Producto</h1>
      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Imagen"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      <button onClick={handleCreateProduct}>Crear</button>
    </div>
  );
};

export default CreateProduct;
