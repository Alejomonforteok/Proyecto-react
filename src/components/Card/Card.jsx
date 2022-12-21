import React from "react";
import "./Card.css";




const Card = (props) =>{
 const { titulo, img, precio} = props;


 return(
    <div className="card estilo_bordes" style={{width:"18rem"}}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 className="card-tittle">{titulo}</h4>
            <h5 className="card-text"> ${precio}</h5>
            <button className="btn btn-primary" btnText="Comprar"/>
        </div>
    </div>
 );
};

export default Card;