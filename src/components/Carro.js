import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {},
};

class Carro extends Component {
  render() {
    return (
      <div>
        <span>
          <BubbleAlert />
        </span>
        <button style={styles.carro}>Carro</button>
      </div>
    );
  }
}

export default Carro;
