import { Component } from "react";

class Producto extends Component {
  render() {
    //console.log(this.props);
    const { producto } = this.props;
    return (
      <div>
        <img alt={producto.name} src={producto.img} />
      </div>
    );
  }
}

export default Producto;
