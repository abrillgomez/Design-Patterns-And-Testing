import { useEffect, useState } from "react"

export const ProductFunctional = ({ title }) => {
  const [name, setName] = useState('Example Product')
  const [price, setPrice] = useState(100)

  useEffect(() => {
    console.log('Componente montado.')
  }, [])

  const handleAddToCart = () => {
    console.log('Agregado al carrito')
  }

  const modifyPrice = (newPrice) => {
    setPrice(newPrice)
  }

  return (
    <>
      <h1>title</h1>
      <p>Nombre: {name}</p>
      <p>Precio: ${price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </>
  )
}
