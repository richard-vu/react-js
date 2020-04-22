import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log("componentWillMount was runned");
  }

  componentDidMount() {
    console.log("componentDidMount was runned");
  }

  render() {
    const { isFetching } = this.state;
    console.log("Render!");
    return (
      <div className="container-fluid">
        {isFetching ? <div>Loading....</div> : <div>OK</div>}
      </div>
    );
  }
}
