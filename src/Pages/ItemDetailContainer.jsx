import { Card } from 'react-bootstrap';
import { useGetProductById } from '../hooks/useProducts';
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../components/NavBar/ItemCount';


export const ItemDetailContainer = () => {
  const { id } = useParams()
  const {productData} = useGetProductById ("products", id)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Card key={productData.id} style={{ width: '25rem', marginTop: '20px'}}>
          <Card.Img variant="top" src={productData.thumbnail} />
          <Card.Body>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>{productData.description}</Card.Text>
            <Card.Text>${productData.price}</Card.Text>
            <ItemCount />
            <Link to={`/UpdateProduct/${productData.id}`} style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Editar Producto</Link>
          </Card.Body>
        </Card>
    </div>
    
  );
};

export default ItemDetailContainer
