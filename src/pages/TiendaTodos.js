import { React, useEffect, useState } from 'react';
import ItemList from '../components/ItemList';

function TiendaTodos(props) {

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

    console.log(props)

    return (
        <>
            <div><p className="font text-center">Catalogo Productos</p></div>
            <ItemList productos={productsFetch}/>
        </>
    )
}

export default TiendaTodos;