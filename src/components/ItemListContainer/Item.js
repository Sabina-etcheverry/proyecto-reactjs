import React from 'react';
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ name, img, id }) => {
    return (
        <div className="card-container">
            <div className="img-container">
            <img src={img} alt={name} className="img-item"/>
            </div>
            <h3 className="">{name}</h3>
            <Link to={`/item/${id}`}><button> VER DETALLE</button></Link>
        </div>
  );
};

export default Item;
