import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const url = 'https://cors-anywhere.herokuapp.com/https://fortnite-api.theapinetwork.com/upcoming/get';
        const data = await fetch(url);
        const items = await data.json();
        setItems(items.items);
    }

    return (<div className="Shop" >
        {items.map(item =>
            <h1>
                <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
            </h1>
        )}
    </div>
    );
}

export default Shop;