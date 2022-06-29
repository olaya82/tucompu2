import { React, useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList';

function ItemListContainer ({ productos, catalogo }) {
    
    const [productsFetch, setProductsFetch] = useState([])
    
    useEffect (() => {
        setTimeout(() => {
            fetch('productos.json', {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })    
                .then(resp => resp.json())
                .then(productos => setProductsFetch(productos))
                .catch(err => console.log(err))
        }, 3000)
    },[]);
    
    return (
        <>
            <div><p className="font text-center">{catalogo}</p></div>
            <ItemList productos={productsFetch}/>
        </>
    );
}
export default ItemListContainer;