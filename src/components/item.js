const Item = ({producto}) => {
    
   
    return (
        <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">descripcion de producto</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );    
}
 
export default Item;