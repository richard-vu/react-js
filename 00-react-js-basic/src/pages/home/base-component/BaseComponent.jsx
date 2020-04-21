import React, { Component } from "react";
import ComponentFunctionDefault from "./component-function-default/ComponentFunctionDefault";
import ComponentClass from "./component-class/ComponentClass";
import ComponentArrowFunction from "./component-arrow-function/ComponentArrowFunction";
import ComponentAnonymousFunction from "./component-anonymous-function/ComponentAnonymousFunction";
import "./BaseComponent.css";

export default class BaseComponent extends Component {
  render() {
    return (
      <div className="container-fluid base-top">
        <div className="row text-center">
          <ComponentFunctionDefault />
          <ComponentClass />
          <ComponentArrowFunction />
          <ComponentAnonymousFunction />
        </div>
      </div>
    );
  }
}
