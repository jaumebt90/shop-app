import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#0A283E",
    color: "#fff",
  },
};

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
