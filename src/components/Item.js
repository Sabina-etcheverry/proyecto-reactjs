import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="item">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.name}</h2>
                <h3>${item.price}</h3>
                <p>Stock disponible: <span>{item.stock}</span></p>
            </div>
        </div>
    );
};

export default Item;
