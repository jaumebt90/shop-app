import { Component } from "react";

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return <div>
      {productos.map(producto=>)}
    </div>
  }
}

export default Productos;
