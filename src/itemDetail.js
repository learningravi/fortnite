import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({ images: {} });

    const fetchItem = async () => {
        const url = `https://cors-anywhere.herokuapp.com/https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;
        const data = await fetch(url);
        const item = await data.json();
        console.log(item);
        setItem(item);
    }

    return (<div className="Shop" >
        <h1>{item.name}</h1>
        <img src={item.images.transparent} alt="" />
    </div>
    );
}

export default ItemDetail;