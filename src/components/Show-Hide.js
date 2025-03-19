import React, { Component } from "react";

import "./Show-Hide.css";

class Show extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  };

  onShowFirstName = () => {
    this.setState((prevState) => ({ showFirstName: !prevState.showFirstName }));
  };

  onShowLastName = () => {
    this.setState((prevState) => ({ showLastName: !prevState.showLastName }));
  };

  render() {
    const { showFirstName, showLastName } = this.state;
    return (
      <div class="container">
        <h1 className="heading">Show/Hide </h1>
        <div className="btn-name-container">
          <div className="btn-container">
            <button className="button" onClick={this.onShowFirstName}>
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="btn-container">
            <button className="button" onClick={this.onShowLastName}>
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Jones</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
