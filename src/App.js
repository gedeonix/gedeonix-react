import React, {Component} from "react";
import {ThemeProvider} from "styled-components";
import Button, {PrimaryButton, SuccessButton, WarningButton, DangerButton, LightButton, DarkButton} from "./components/Button";
import Body from "./components/Body";
import {Title, Section} from "./components/Simple";
import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Body>
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

            <h2>Buttons</h2>
            <Button>Default</Button>
            <PrimaryButton>Primary</PrimaryButton>
            <SuccessButton>Success</SuccessButton>
            <WarningButton>Warning</WarningButton>
            <DangerButton>Danger</DangerButton>
            <LightButton>Light</LightButton>
            <DarkButton>Dark</DarkButton>

          </div>
        </Body>
      </ThemeProvider>
    );
  }
}

export default App;
