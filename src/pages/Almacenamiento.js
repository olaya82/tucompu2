import { React, useEffect, useState } from 'react';
import ItemList from '../components/ItemList';

function Almacenamiento(props) {

    const [productsFetch, setProductsFetch] = useState([])
        
    useEffect (() => {
        setTimeout(() => {
            fetch('../productos.json', {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })    
                .then(resp => resp.json())
                .then(productos => setProductsFetch(productos.filter(i => i.catalogo === "Almacenamiento")))
                .catch(err => console.log(err))
        }, 3000)
    },[]);

    console.log(productsFetch)

    return (
        <>
            <div><p className="font text-center">Catalogo Alamacenamiento</p></div>
            <ItemList productos={productsFetch}/>
        </>
    )
}

export default Almacenamiento;