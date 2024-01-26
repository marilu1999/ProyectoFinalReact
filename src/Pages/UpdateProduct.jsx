import { useParams } from "react-router-dom"
import { useGetProductById } from "../hooks/useProducts";
import { useEffect, useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const {id} = useParams()

    const {productData} = useGetProductById ("products", id) 
    console.log(productData)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        setTitle(productData.title)
        setDescription(productData.description)
        setPrice(productData.price)
        setThumbnail(productData.thumbnail)
        setCategory(productData.category)
    }, [productData])

    const handleUpdateProduct = () => {
       const data = {
        title,
        description,
        price,
        thumbnail,
        category,
       };
       const db = getFirestore ();
       const productCollection = doc(db, "products", id);
       updateDoc(productCollection, data).then(() => {
        Swal.fire({
            icon: "success",
            title: "Actualización Exitosa",
          });
       })
    }
  
  return (
    <div>
      <h1 style={{ paddingLeft: "450px", marginTop: "1.5rem", marginBottom: "1.5rem" }}>Editar Producto</h1>
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
      
      <button onClick={handleUpdateProduct}>Actualizar</button>
    </div>
  )
} 

export default UpdateProduct
 