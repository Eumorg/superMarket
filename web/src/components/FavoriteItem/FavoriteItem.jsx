import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './FavoriteItem.module.css';

function FavoriteItem({ id, model, img, price, color, description }) {

   return (
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={img} />
         <Card.Body>
            <Card.Title>{model}</Card.Title>
            <Card.Text><span>{`ЦЕНА: ${price}`}</span></Card.Text>
            <Card.Text><span>{`ЦВЕТ: ${color}`}</span></Card.Text>
            <Button variant="primary">В корзину</Button>
            <Button className={style.button} variant="danger">Удалить</Button>
         </Card.Body>
      </Card>
   );
}

export default FavoriteItem;
