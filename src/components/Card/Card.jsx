import React from "react";
import "./Card.css";




const Card = (props) =>{
 const { title, image, price} = props;


 return(
    <div className="card estilo_bordes" style={{width:"18rem"}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 className="card-tittle">{title}</h4>
            <h5 className="card-text"> ${price}</h5>
            <button className="btn btn-primary" btnText="Comprar"/>
        </div>
    </div>
 );
};

export default Card;