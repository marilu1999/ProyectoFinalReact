import ItemListContainer from "../components/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

const Home = () => {
    const {productsData} = useGetProducts ('products');

  return <ItemListContainer productsData={productsData} />
};

export default Home;
