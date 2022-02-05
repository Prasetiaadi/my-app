import React, { Component } from "react";
import Header from "parts/Header";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}/>
        {/* <p>test2</p> */}
      </>
    );
  }
}

export default LandingPage;
