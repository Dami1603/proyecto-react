import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from "../../services/config"
import { collection, getDocs, query, where } from 'firebase/firestore'
import Loader from '../Loader/Loader'

const ItemListContainer = ({mensaje}) => {

  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(false)

  const {idCategoria} = useParams()

  useEffect(()=>{
    setLoading(true)
    const misProductos = idCategoria ? query(collection(db,"productos"),where("categoria","==",idCategoria)): collection(db, "productos")

    getDocs(misProductos)
    .then(res =>{
      const nuevosProductos = res.docs.map(doc =>{
        const data = doc.data()
        return {id:doc.id, ...data}
      })
      .filter((producto) => producto.stock >= 1)
      setProductos(nuevosProductos)
    })
    .catch(error => console.log(error))
    .finally(()=>{
      console.log("Carga terminada")
      setLoading(false)
    }

    )
  },[idCategoria])

  return (
    <>
      {loading ? <Loader/> : <ItemList productos={productos}/>}
    </>
  )
}

export default ItemListContainer