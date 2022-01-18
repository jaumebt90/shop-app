import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: "50px",
  },
};

class DetallesCarro extends Component {
  render() {
    return <div style={styles.detallesCarro}>Chanchito</div>;
  }
}

export default DetallesCarro;
