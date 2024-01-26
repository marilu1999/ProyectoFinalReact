import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ productsData }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {productsData.map((products) => (
        <Card key={products.id} style={{ width: '18rem', margin: '20px' }}>
          <Link to={`/item/${products.id}`}>
          <Card.Img variant="top" src={products.thumbnail} />
          </Link>
          <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>{products.description}</Card.Text>
            <Card.Text>${products.price}</Card.Text>
            <Link to={`/item/${products.id}`}>
          <Button variant="primary">Agregar al Carrito</Button>
        </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ItemListContainer;
