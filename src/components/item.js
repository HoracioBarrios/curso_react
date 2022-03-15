import ItemList from "./itemList";

const Item = ({producto}) => {
   
    return (
        <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.description}</p>
                    <h3>{producto.precio}</h3>
                </div>
        </div>
    );    
}
 
export default Item;