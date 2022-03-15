import ItemList from "./itemList"
import { useEffect, useState } from "react"
{/*import ItemCount from "./ItemCount";*/}

{/*listado de productos*/}
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
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })
        
        pedido
        .then((resultado)=>{
            setProductos(resultado)
        })
        .catch((error)=>{
            console.log("Algo salio mal")
        })

    },[])

        return (
            <>
            <div className = 'card m-4' id = 'container'>
            <button onClick={() => setLoading(!loading)}>toggle</button>
            <ItemList productosIniciales/>
            
            </div>
            
            </>
    )
}

export default ItemListContainer