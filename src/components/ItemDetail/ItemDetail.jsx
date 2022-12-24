import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    const { title, description, price, image, rating } = product;
  
    return (
        
      <div className='details__container'>
        <div className='details__wrapper'>
          <div className='product__picture col-4'>
            <img src={image} alt='product_picture' width={250} height={'auto'} />
          </div>
          <div className='product__info col-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <p>${price}</p>
              </div>
              <ItemCount stock={rating} />
              <button id='add-chart-button' className='btn btn-outline-dark'>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;


/*   <div className="card estilo_bordes" style={{width:"18rem"}}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
      <h4 className="card-tittle">{titulo}</h4>
      <h5 className="card-text"> ${precio}</h5>
      <button className="btn btn-primary" btnText="Comprar"/>
  </div>
</div> */