import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    message: "",
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    const message = await axios.get("/api/");
    this.setState({ message });
  }

  render() {
    return (
      <h1>{this.state.message ? this.state.message : "no server running"}</h1>
    );
  }
}
export default App;
