import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import {ThemeProvider} from "styled-components";
import theme from "../theme";

import Button, {PrimaryButton, SuccessButton, WarningButton, DangerButton, LightButton, DarkButton} from '../components/Button';

storiesOf('Button', module)
  .add('Colors', () => (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={action('clicked')}>Default</Button>
        <PrimaryButton onClick={action('clicked')}>Primary</PrimaryButton>
        <SuccessButton onClick={action('clicked')}>Success</SuccessButton>
        <WarningButton onClick={action('clicked')}>Warning</WarningButton>
        <DangerButton onClick={action('clicked')}>Danger</DangerButton>
        <LightButton onClick={action('clicked')}>Light</LightButton>
        <DarkButton onClick={action('clicked')}>Dark</DarkButton>
      </div>
    </ThemeProvider>
  ))
  .add('Size', () => (
    <ThemeProvider theme={theme}>
      <div>
        <Button xs>Extra small</Button>
        <Button sm>Small</Button>
        <Button>Normal</Button>
        <Button md>Middle</Button>
        <Button lg>Large</Button>
      </div>
    </ThemeProvider>
  ))
;
