import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import {ThemeProvider} from "styled-components";
import theme, { dark } from "../theme";

import Body from "../components/Body";
import Avatar from '../components/Avatar';
import { Container, FluidContainer } from '../components/Container';
import Button, {PrimaryButton, SuccessButton, WarningButton, DangerButton, LightButton, DarkButton} from '../components/Button';
import { Icon, IconButton } from '../components/Icon';
import { Row, Col } from '../components/Grid';
import { Table, Th, Td } from '../components/Table';
import AppBar from '../components/AppBar';
import Drawer, { DrawerHeader, DrawerItem } from '../components/Drawer';

storiesOf('Components', module)
  .add('Button', () => (
    <ThemeProvider theme={theme}>
      <Body>
        <h1>Button</h1>
        <Button onClick={action('clicked')}>Button</Button>

        <h2>Block</h2>
        <Button onClick={action('clicked')} block>Block</Button>

        <h2>Colors</h2>
        <Button onClick={action('clicked')}>Default</Button>
        <PrimaryButton onClick={action('clicked')}>Primary</PrimaryButton>
        <SuccessButton onClick={action('clicked')}>Success</SuccessButton>
        <WarningButton onClick={action('clicked')}>Warning</WarningButton>
        <DangerButton onClick={action('clicked')}>Danger</DangerButton>
        <LightButton onClick={action('clicked')}>Light</LightButton>
        <DarkButton onClick={action('clicked')}>Dark</DarkButton>

        <h2>Round</h2>
        <Button onClick={action('clicked')} round>Default</Button>
        <PrimaryButton onClick={action('clicked')} round>Primary</PrimaryButton>
        <SuccessButton onClick={action('clicked')} round>Success</SuccessButton>
        <WarningButton onClick={action('clicked')} round>Warning</WarningButton>
        <DangerButton onClick={action('clicked')} round>Danger</DangerButton>
        <LightButton onClick={action('clicked')} round>Light</LightButton>
        <DarkButton onClick={action('clicked')} round>Dark</DarkButton>

        <h2>Reset radius</h2>
        <Button onClick={action('clicked')} resetRadius>Default</Button>
        <PrimaryButton onClick={action('clicked')} resetRadius>Primary</PrimaryButton>
        <SuccessButton onClick={action('clicked')} resetRadius>Success</SuccessButton>
        <WarningButton onClick={action('clicked')} resetRadius>Warning</WarningButton>
        <DangerButton onClick={action('clicked')} resetRadius>Danger</DangerButton>
        <LightButton onClick={action('clicked')} resetRadius>Light</LightButton>
        <DarkButton onClick={action('clicked')} resetRadius>Dark</DarkButton>

        <h2>Outline</h2>
        <Button onClick={action('clicked')} outline>Default</Button>
        <PrimaryButton onClick={action('clicked')} outline>Primary</PrimaryButton>
        <SuccessButton onClick={action('clicked')} outline>Success</SuccessButton>
        <WarningButton onClick={action('clicked')} outline>Warning</WarningButton>
        <DangerButton onClick={action('clicked')} outline>Danger</DangerButton>
        <LightButton onClick={action('clicked')} outline>Light</LightButton>
        <DarkButton onClick={action('clicked')} outline>Dark</DarkButton>

        <h2>Size</h2>
        <Button xs>Extra small</Button>
        <Button sm>Small</Button>
        <Button>Normal</Button>
        <Button md>Middle</Button>
        <Button lg>Large</Button>

      </Body>
    </ThemeProvider>
  ))
  .add('Icon & IconButton', () => (
    <ThemeProvider theme={theme}>
      <Body>
        <h1>Icon</h1>
        <Icon name="plus"/>
        <Icon name="bars"/>
        <Icon name="minus"/>
        <h1>IconButton</h1>
        <IconButton icon="plus" onClick={action('clicked')}/>
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
  .add('Input', () => (
    <div>
      todo...
    </div>
  ))
  .add('Link', () => (
    <div>
      todo...
    </div>
  ))
  .add('Group', () => (
    <div>
      todo...
    </div>
  ))
  .add('Checkbox', () => (
    <div>
      todo...
    </div>
  ))
  .add('Radio', () => (
    <div>
      todo...
    </div>
  ))
  .add('Select', () => (
    <div>
      todo...
    </div>
  ))
  .add('Textarea', () => (
    <div>
      todo...
    </div>
  ))
  .add('Close button', () => (
    <div>
      todo...
    </div>
  ))
  .add('Label', () => (
    <div>
      todo...
    </div>
  ))
  .add('Tag', () => (
    <div>
      todo...
    </div>
  ))
  .add('Badge', () => (
    <div>
      todo...
    </div>
  ))
  .add('Popup', () => (
    <div>
      todo...
    </div>
  ))
  .add('Alert', () => (
    <div>
      todo...
    </div>
  ))
  .add('Avatar', () => (
    <div>
      <Avatar url="http://placekitten.com/g/64/64" />
      <Avatar url="http://placekitten.com/g/64/64" round />
      <Avatar url="http://placekitten.com/g/200/200" size="100" />
      <Avatar url="http://placekitten.com/g/200/200" size="100" round />
    </div>
  ))
;

storiesOf('Containers', module)
  .add('Container & Fluid', () => (
    <div>
      <Container style={{backgroundColor: '#ffff80', outline: '1px dashed #ff0000'}}>Container</Container>
      <br/>
      <FluidContainer style={{backgroundColor: '#ffff80', outline: '1px dashed #ff0000'}}>Fluid container</FluidContainer>
    </div>
  ))
  .add('Cards', () => (
    <div>
      todo...
    </div>
  ))
  .add('Tables', () => (
    <Body>
      <Table>
        <thead>
        <tr>
          <Th>A</Th>
          <Th>B</Th>
          <Th>C</Th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <Td>1</Td>
          <Td>2</Td>
          <Td>3</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>5</Td>
          <Td>6</Td>
        </tr>
        </tbody>
      </Table>
    </Body>
  ))
  .add('Tiles', () => (
    <div>
      todo...
    </div>
  ))
;

storiesOf('Grids', module)
  .add('Flex grid', () => (
    <Body>
    <Row>
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
      <Col>5</Col>
      <Col>6</Col>
      <Col>7</Col>
      <Col>8</Col>
      <Col>9</Col>
      <Col>10</Col>
      <Col>11</Col>
      <Col>12</Col>
    </Row>
    </Body>
  ))
;

storiesOf('Navigation', module)
  .add('Drawer', () => (
    <Body>
      <Drawer open items={[]} position="relative">
        <DrawerHeader>Title</DrawerHeader>
        <DrawerItem>Item 1</DrawerItem>
        <DrawerItem>Item 2</DrawerItem>
        <DrawerItem>Item 3</DrawerItem>
      </Drawer>
    </Body>
  ))
  .add('AppBar', () => (
    <Body>
      <AppBar title="Title" toggleDrawer={action('toggle')} />
    </Body>
  ))
;

storiesOf('Forms', module)

;

storiesOf('Modal', module)

;

storiesOf('Typography', module)

;

storiesOf('Themes', module)
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
