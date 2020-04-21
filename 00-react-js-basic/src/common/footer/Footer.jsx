import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="row bg-info text-center">
        <div className="col-12 footer-copyright py-3">
          © 2020 Copyright:
          <a href="https://github.com/richard-vu"> richard-vu</a>
        </div>
      </footer>
    );
  }
}
