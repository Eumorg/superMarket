import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ model, img, price }) {

   return (
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={img} />
         <Card.Body>
            <Card.Title>{model}</Card.Title>
            <Card.Text><span>{`ЦЕНА: ${price}`}</span></Card.Text>
            <Button variant="primary">Добавить в Корзину</Button>
         </Card.Body>
      </Card>
   );
}

export default BasicExample;