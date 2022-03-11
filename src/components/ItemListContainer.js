
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react"

{/*Simulacion de productos*/}
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
        //Aca quiero pedir los productos

        //
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
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
            <button onClick={() => setLoading(!loading)}>toggle</button>
            <ul>
                {productos.map((producto)=>{
                    return <li key={producto.id}>{producto.nombre}</li>
                })}
            </ul>
            </div>
            <ItemCount stock={10} initial={1}/>
            </>
    )
}

export default ItemListContainer