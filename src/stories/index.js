import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import {ThemeProvider} from "styled-components";
import theme, { dark } from "../theme";

import Body from "../components/Body";
import Button, {PrimaryButton, SuccessButton, WarningButton, DangerButton, LightButton, DarkButton} from '../components/Button';

storiesOf('Component', module)
  .add('Button', () => (
    <ThemeProvider theme={theme}>
      <Body>
        <h1>Colors</h1>
        <Button onClick={action('clicked')}>Default</Button>
        <PrimaryButton onClick={action('clicked')}>Primary</PrimaryButton>
        <SuccessButton onClick={action('clicked')}>Success</SuccessButton>
        <WarningButton onClick={action('clicked')}>Warning</WarningButton>
        <DangerButton onClick={action('clicked')}>Danger</DangerButton>
        <LightButton onClick={action('clicked')}>Light</LightButton>
        <DarkButton onClick={action('clicked')}>Dark</DarkButton>

        <h1>Size</h1>
        <Button xs>Extra small</Button>
        <Button sm>Small</Button>
        <Button>Normal</Button>
        <Button md>Middle</Button>
        <Button lg>Large</Button>

      </Body>
    </ThemeProvider>
  ))
  .add('Input', () => (
    <ThemeProvider theme={theme}>
      <Body>
        todo...
      </Body>
    </ThemeProvider>
  ))
;

storiesOf('Theme', module)
  .add('Light', () => (
    <ThemeProvider theme={theme}>
      <Body>
        <DangerButton>Button</DangerButton>
      </Body>
    </ThemeProvider>
  ))
  .add('Dark', () => (
    <ThemeProvider theme={dark}>
      <Body>
        <DangerButton>Button</DangerButton>
      </Body>
    </ThemeProvider>
  ))
;
