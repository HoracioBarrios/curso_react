import {useState} from 'react';

function ItemCount({initial, stock}) {
  
  const [estado, setEstado] = useState(initial);
  
  const clicSuma =() => {
    if (estado<stock){
      setEstado(estado+1)
    }
  }
  
  const clicResta =() => {
    if(estado > 0){
      setEstado(estado-1)
    }
  }
  const clicConfirm =() => {
    if(estado>0){
    console.log("Orden confirmada");
    }else {console.log("Debe seleccionar al menos un elemento");
}
  }
  
  return (
    <>
    <div className="card m-5 text-center">
        <div className="card-body">
            <h4 className="card-title">Contador</h4>
            <div className='container'>
                <p className="card-text">{estado}</p>
                <button onClick={clicSuma} type="button" className="btn btn-primary m-1">+</button>
                <button onClick={clicResta} type="button" className="btn btn-primary m-1">-</button>  
            </div>
            <div>
            <button onClick={clicConfirm} type="button" className="btn btn-dark btn" data-bs-target="#confirma">Confirmar</button>
            </div>
        </div>
      </div>
 

    </>

  )}
 
export default ItemCount