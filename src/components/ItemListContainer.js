
{/*import ItemCount from "./ItemCount";*/}
import { useEffect, useState } from "react"
import ItemList from "./itemList"

let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]

const ItemListContainer = () =>{
    
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        console.log("Ejecutando useEffect")
      
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })
        
        pedido
        .then((resultado)=>{
            console.log("Estuvo bien")
            setProductos(resultado)
        })
        .catch((error)=>{
            console.log("Estuvo mal")
        })

    },[])

        return (
            <>
            <div className = 'card m-4' id = 'container'>
            <ItemList producto/>
            <button onClick={() => setLoading(!loading)}>toggle</button>
            
            </div>
            
            </>
    )
}

export default ItemListContainer