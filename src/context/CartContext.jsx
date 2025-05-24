import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CartProvider= ({children}) =>{
    const [carrito,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidadTotal,setCantidadTotal] = useState(0)

    const agregarAlCart = (item,cantidad) =>{
        const productoExistente = carrito.find (prod => prod.item.id === item.id)
        
        if(!productoExistente){
            setCart(prev => [...prev,{item, cantidad}])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio* cantidad))
        }else{
            const carritoActualizado = carrito.map (prod => {
                if(prod.item.id === item.id) {
                    return {...prod,cantidad: prod.cantidad + cantidad}
                }else{
                    return prod
                }
            })
            setCart(carritoActualizado)
            setCantidadTotal(prev => prev+cantidad)
            setTotal( prev => prev+(item.precio * cantidad))
        }

    }

    //Funcion para eliminar producto

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id)
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)
    

        setCart(carritoActualizado)
        setCantidadTotal(prev=> prev - productoEliminado.cantidad)
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))

    }   


    //Funcion para vaciar Carrito:

    const vaciarCarrito = () =>{
        setCart([])
        setCantidadTotal(0)
        setTotal(0)
    }

    return (
        <CartContext.Provider value={{carrito,total,cantidadTotal,agregarAlCart,eliminarProducto,vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )


}




