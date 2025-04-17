import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({stock, inicial, funcionagregar}) => {

    const [contador,setContador] = useState(inicial)

    const incrementar = () =>{
        if(contador < stock){
            setContador(contador +1)
        }
    }

    const decrementar = () =>{
        if(contador > inicial){
            setContador(contador -1)
        }
    }

  return (
    <div>
        <div className='countCart'>
            <button onClick={decrementar}>-</button>
            <p>{contador}</p>  
            <button onClick={incrementar}>+</button>
        </div>
        <div className='confirmCart'> 
            <button onClick={()=>funcionagregar(contador)}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount