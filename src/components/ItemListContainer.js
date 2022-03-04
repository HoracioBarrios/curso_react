import {useState} from "react";
import ItemCount from ".ItemCount.js";

const ItemListContainer = (props) =>{
    
    const [estado, setEstado]=useState(0)
    return (
            <div className = 'card m-4' id = 'container'>
            {"Aqui ira el catálogo"}
        </div>
    )
}

export default ItemListContainer