import React from 'react';
import Item from './Item';
import "./ItemList.css";

const ItemList = ({ items }) => {
    return (
        <div className="itemlist">
            {items.map(item => <Item key={item.id} {...item}/>)}
        </div>
        
    );
};

export default ItemList;