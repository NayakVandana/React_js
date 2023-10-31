import React from "react";
import { CommonContext } from "./component/CommonContext";
import Main from "./component/Main";
import UpdateButton from "./component/UpdateButton";
import Header from "./component/Header";
import Footer from "./component/Footer";
class App extends React.Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };
    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }
  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <CommonContext.Consumer>
          {({ color }) => (
            <h1 style={{ backgroundColor: color }}>
              Complete and easy example for Context API
            </h1>
          )}
        </CommonContext.Consumer>

        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    );
  }
}

export default App;
