import Item from "./item";

const ItemList = ({productosIniciales}) => {
    
    {productosIniciales.map((productos)=>{
        return <Item producto/>
    })}
}
 
export default ItemList;