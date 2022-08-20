import React from 'react';
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ name, img, id, description }) => {

    return (
    <div className="item">
      <img className="item-img" src={img} alt={name} />
      <div>
        <h2 className="item-title">{name}</h2>
        <p className='item-description'>{description}</p>
      </div>
      <div>
        <Link to={`/item/${id}`}>
          <button className="item-btn">VER DETALLE</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
