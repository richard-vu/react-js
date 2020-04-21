import React, { Component } from "react";
import "./Home.css";

import Header from "../../common/header/Header";
import BaseComponent from "./base-component/BaseComponent";
import Card from "./card/Card";
import Map from "./map/Map";
import ListUsers from "./list-users/ListUsers";
import Footer from "../../common/footer/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleButton: "Show list users",
      showHide: 0,
      signStatus: 0,
      count: 0,
      userList: [
        {
          id: null,
          firstName: null,
          lastName: null,
          active: null,
        },
      ],
    };
  }

  checkSign = () => {
    if (this.state.showHide !== 0) {
      return <ListUsers />;
    }
    return;
  };

  showListUsers = () => {
    this.setState({ showHide: 1, titleButton: "Hide list users" });
  };

  hideListUsers = () => {
    this.setState({ showHide: 0,titleButton: "Show list users" });
  };

  render() {
    return (
      <div className="container-fluid">
        <div>
          <Header className="header-align container-fluid" />
        </div>

        <BaseComponent />
        <Card />
        <div className="text-center home-align">
          <Map />
        </div>

        <div className="row text-center home-align">
          <div className="col-12">
            <div className="btn btn-group" role="group">
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (this.state.showHide === 0) {
                    this.showListUsers();
                  } else {
                    this.hideListUsers();
                  }
                }}
              >
                {this.state.titleButton}
              </button>
            </div>
          </div>
        </div>
        <div className="row">{this.checkSign()}</div>
        <div className="row">
          <a href="/#" className="col-12 text-right">
            Back to top
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}
