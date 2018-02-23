import React, {Component} from "react";
import "./Landing.css";

class Landing extends Component {
  state = {
    response: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.name }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default Landing;