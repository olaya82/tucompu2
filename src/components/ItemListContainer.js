import { React, useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

function ItemListContainer (props) {
    
    const params = useParams()
    const [productsFetch, setProductsFetch] = useState([])
    
    useEffect (() => {
        setTimeout(() => {
            fetch('/productos.json', {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })    
                .then(resp => resp.json())
                .then(productos => setProductsFetch(productos.filter(prd => prd.catalogo === params.categoria)))
                .catch(err => console.log(err))
        }, 3000)
    },);

    return (
        <>
            <div><p className="font text-center">Categoria {params.categoria}</p></div>
            <ItemList productos={productsFetch}/>
        </>
    )
}
export default ItemListContainer;