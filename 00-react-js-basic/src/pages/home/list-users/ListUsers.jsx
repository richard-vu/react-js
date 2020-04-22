import React, { Component } from "react";

export default class ListUsers extends Component {

  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Megu</td>
              <td>Fujjiura</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Marria</td>
              <td>Ozawa</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Rolla</td>
              <td>Misaki</td>
              <td>@slow</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
