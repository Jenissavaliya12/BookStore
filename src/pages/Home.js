import React, { Component } from "react";
// import Title from '../component/Title'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "This is title",
    };
  }
  changeTitle() {
    this.setState({
      title: "This was changed title",
    });
  }

  render() {
    return (
      <div className="container">
        <p>Hello {this.state.title}</p>
        <button
          type="button"
          onClick={() => this.changeTitle()}
          class="btn btn-primary"
        >
          Subscibe
        </button>
      </div>
    );
  }
}
