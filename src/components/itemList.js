const ItemList = ({producto}) => {
    
    {productos.map((producto)=>{
        return <li key={producto.id}>{producto.nombre}</li>
    })}
    return (productos);
}
 
export default ItemList;