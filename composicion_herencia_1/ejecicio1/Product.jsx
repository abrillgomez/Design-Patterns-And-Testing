import { Component } from "react"

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Example Product',
      price: 100,
    }
    this.handleAddToCart.bind(this)
  }

  componentDidMount(){
    console.log('Componente montado.')
  }

  handleAddToCart(){
    console.log('Agregado al carrito')
  }

  render() {
    const {name, price} = this.state

    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Nombre: {name}</p>
        <p>Precio: ${price}</p>
        <button onClick={this.handleAddToCart}>Agregar al carrito</button>
      </div>
    )
  }
}

export default Product