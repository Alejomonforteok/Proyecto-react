import { useNavigate } from 'react-router-dom';
import './styles.css';

const Item = (props) => {
  const { id, title, price, image, stock } = props;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/item/${id}`;
    navigate(path);
  };

  return (
    <>
      <div className='card card-hover-shadow m-3' style={{ width: '18rem' }} onClick={routeChange}>
        <img src={image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>Stock: {stock}</p>
          <p className='card-text'>${price}</p>
        </div>
      </div>
    </>
  );
};

export default Item;