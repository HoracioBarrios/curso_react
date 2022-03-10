import {useState} from 'react';

function ItemCount() {
  const stock = 10;
  const [estado, setEstado] = useState(0);
  
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
    {/*Por fvor revisar!!!
    
    <div className="modal fade" id="#confirma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Confirmado</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Su orden ha sido confirmada
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Ok</button>
          </div>
        </div>
      </div>
  </div>*/}

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