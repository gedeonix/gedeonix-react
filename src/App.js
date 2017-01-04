import React, {Component} from "react";
import {ThemeProvider} from "styled-components";
import Button, {PrimaryButton, SuccessButton, WarningButton, DangerButton} from "./components/Button";
import {Title, Section} from "./components/Simple";
import logo from "./logo.svg";
import "./App.css";

import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <h2>Simple styled components</h2>
          <Section>
            <Title>Hello World, this is my first styled component!</Title>
          </Section>

          <div>
            <Button>Default</Button>
            <PrimaryButton>Primary</PrimaryButton>
            <SuccessButton>Success</SuccessButton>
            <WarningButton>Warning</WarningButton>
            <DangerButton>Danger</DangerButton>
          </div>

        </div>
      </ThemeProvider>
    );
  }
}

export default App;
