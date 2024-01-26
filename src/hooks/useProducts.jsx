import {useState, useEffect} from "react";
import { getCategories, getProductsByCategory } from "../services";
import { collection, getDocs, doc, getDoc, getFirestore} from "firebase/firestore"

export const useGetProducts = (collectionName = 'products') => {
    const [productsData, setProductsData] = useState([]);
    useEffect (() => {
        const db = getFirestore ();
        const ProductsCollection = collection (db, collectionName);

        getDocs(ProductsCollection).then((snapshot) => {
          setProductsData(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
    }, []); 

      return {productsData}

}

export const useGetProductById = (collectionName = "products", id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const db = getFirestore ();
      const docRef = doc(db, collectionName, id)
      getDoc(docRef).then((doc) => {
        setProductData({id: doc.id, ...doc.data()})
      })
    }, [id]);

    return {productData}
 
}


export const useGetCategories = (collectionName = 'categories') => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      const db = getFirestore();
      const ProductsCollection = collection(db, collectionName);

      getDocs(ProductsCollection).then((snapshot) => {
        const categories = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setCategories (
          categories[0].categories
        );
      });
    }, []);

    return {categories}

}

export const useGetProductsByCategory = (id) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
      getProductsByCategory(id)
        .then((response) => {
          setProductsData(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

    return {productsData}

}