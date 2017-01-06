import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import {ThemeProvider} from "styled-components";
import theme, { dark } from "../theme";

import Body from "../components/Body";
import Avatar from '../components/Avatar';
import { Container, FluidContainer } from '../components/Container';
import Button, {PrimaryButton, SuccessButton, WarningButton, DangerButton, LightButton, DarkButton} from '../components/Button';
import { TwitterButton, FacebookButton, GoogleButton, GithubButton, RssButton } from '../components/Social';
import { Input } from '../components/Input';
import { Icon, IconButton } from '../components/Icon';
import { Row, Col } from '../components/Grid';
import { Table, Th, Td } from '../components/Table';
import AppBar from '../components/AppBar';
import Drawer, { DrawerHeader, DrawerItem } from '../components/Drawer';

storiesOf('Components', module)
  .add('Button', () => (
    <ThemeProvider theme={theme}>
      <dev>
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

        <h2>Disabled</h2>
        <Button disabled onClick={action('clicked')}>Default</Button>
        <PrimaryButton disabled onClick={action('clicked')}>Primary</PrimaryButton>
        <SuccessButton disabled onClick={action('clicked')}>Success</SuccessButton>
        <WarningButton disabled onClick={action('clicked')}>Warning</WarningButton>
        <DangerButton disabled onClick={action('clicked')}>Danger</DangerButton>
        <LightButton disabled onClick={action('clicked')}>Light</LightButton>
        <DarkButton disabled onClick={action('clicked')}>Dark</DarkButton>

        <h2>Icon & text</h2>
        <Button onClick={action('clicked')}><Icon name="check"/> Default</Button>
        <PrimaryButton onClick={action('clicked')}><Icon name="check"/> Primary</PrimaryButton>
        <SuccessButton onClick={action('clicked')}><Icon name="check"/> Success</SuccessButton>
        <WarningButton onClick={action('clicked')}><Icon name="check"/> Warning</WarningButton>
        <DangerButton onClick={action('clicked')}><Icon name="check"/> Danger</DangerButton>
        <LightButton onClick={action('clicked')}><Icon name="check"/> Light</LightButton>
        <DarkButton onClick={action('clicked')}><Icon name="check"/> Dark</DarkButton>

        <h2>Only icon</h2>
        <Button onClick={action('clicked')}><Icon name="check"/></Button>
        <PrimaryButton onClick={action('clicked')}><Icon name="check"/></PrimaryButton>
        <SuccessButton onClick={action('clicked')}><Icon name="check"/></SuccessButton>
        <WarningButton onClick={action('clicked')}><Icon name="check"/></WarningButton>
        <DangerButton onClick={action('clicked')}><Icon name="check"/></DangerButton>
        <LightButton onClick={action('clicked')}><Icon name="check"/></LightButton>
        <DarkButton onClick={action('clicked')}><Icon name="check"/></DarkButton>

        <h2>Square</h2>
        <Button onClick={action('clicked')} square><Icon name="check"/></Button>
        <PrimaryButton onClick={action('clicked')} square><Icon name="check"/></PrimaryButton>
        <SuccessButton onClick={action('clicked')} square><Icon name="check"/></SuccessButton>
        <WarningButton onClick={action('clicked')} square><Icon name="check"/></WarningButton>
        <DangerButton onClick={action('clicked')} square><Icon name="check"/></DangerButton>
        <LightButton onClick={action('clicked')} square><Icon name="check"/></LightButton>
        <DarkButton onClick={action('clicked')} square><Icon name="check"/></DarkButton>
        <br/>
        <Button onClick={action('clicked')} square xs><Icon name="check"/></Button>
        <Button onClick={action('clicked')} square sm><Icon name="check"/></Button>
        <Button onClick={action('clicked')} square><Icon name="check"/></Button>
        <Button onClick={action('clicked')} square md><Icon name="check"/></Button>
        <Button onClick={action('clicked')} square lg><Icon name="check"/></Button>

        <h2>Circle</h2>
        <Button onClick={action('clicked')} circle><Icon name="check"/></Button>
        <PrimaryButton onClick={action('clicked')} circle><Icon name="check"/></PrimaryButton>
        <SuccessButton onClick={action('clicked')} circle><Icon name="check"/></SuccessButton>
        <WarningButton onClick={action('clicked')} circle><Icon name="check"/></WarningButton>
        <DangerButton onClick={action('clicked')} circle><Icon name="check"/></DangerButton>
        <LightButton onClick={action('clicked')} circle><Icon name="check"/></LightButton>
        <DarkButton onClick={action('clicked')} circle><Icon name="check"/></DarkButton>
        <br/>
        <Button onClick={action('clicked')} circle xs><Icon name="check"/></Button>
        <Button onClick={action('clicked')} circle sm><Icon name="check"/></Button>
        <Button onClick={action('clicked')} circle><Icon name="check"/></Button>
        <Button onClick={action('clicked')} circle md><Icon name="check"/></Button>
        <Button onClick={action('clicked')} circle lg><Icon name="check"/></Button>

        <h2>Social</h2>
        <TwitterButton onClick={action('clicked')}><Icon name="twitter"/> Twitter</TwitterButton>
        <FacebookButton onClick={action('clicked')}><Icon name="facebook"/> Facebook</FacebookButton>
        <GoogleButton onClick={action('clicked')}><Icon name="google"/> Google</GoogleButton>
        <GithubButton onClick={action('clicked')}><Icon name="github"/> Github</GithubButton>
        <RssButton onClick={action('clicked')}><Icon name="rss"/> Rss</RssButton>
        <br/>
        <TwitterButton onClick={action('clicked')} circle><Icon name="twitter"/></TwitterButton>
        <FacebookButton onClick={action('clicked')} circle><Icon name="facebook"/></FacebookButton>
        <GoogleButton onClick={action('clicked')} circle><Icon name="google"/></GoogleButton>
        <GithubButton onClick={action('clicked')} circle><Icon name="github"/></GithubButton>
        <RssButton onClick={action('clicked')} circle><Icon name="rss"/></RssButton>

        <h2>Misc</h2>
        <Button onClick={action('clicked')}><Icon name="angle-left"/></Button>
        <Button onClick={action('clicked')}><Icon name="angle-right"/></Button>
        <PrimaryButton onClick={action('clicked')}><Icon name="plus"/> Add</PrimaryButton>
        <DangerButton onClick={action('clicked')}>Remove <Icon name="remove"/></DangerButton>
        <DarkButton onClick={action('clicked')}>Options <Icon name="chevron-down"/></DarkButton>
        <WarningButton onClick={action('clicked')} outline>Print <Icon name="print"/></WarningButton>
        <LightButton onClick={action('clicked')} outline>Download <Icon name="download"/></LightButton>
        <SuccessButton onClick={action('clicked')} circle><Icon name="thumbs-o-up"/></SuccessButton>
        <DangerButton onClick={action('clicked')} circle><Icon name="thumbs-o-down"/></DangerButton>

      </dev>
    </ThemeProvider>
  ))
  .add('Icon & IconButton', () => (
    <ThemeProvider theme={theme}>
      <dev>
        <h1>Icon</h1>
        <Icon name="plus"/>
        <Icon name="bars"/>
        <Icon name="minus"/>

        <h2>Spin</h2>
        <Icon spin name="circle-o-notch"/>
        <Icon spin name="refresh"/>
        <Icon spin name="spinner"/>
        <Icon spin name="cog"/>

        <h2>Pulse</h2>
        <Icon pulse name="cog"/>
        <Icon pulse name="refresh"/>
        <Icon pulse name="spinner"/>
        <Icon pulse name="cog"/>

        <h1>IconButton</h1>
        <IconButton icon="plus" onClick={action('clicked')}/>
      </dev>
    </ThemeProvider>
  ))
  .add('Input', () => (
    <ThemeProvider theme={theme}>
      <dev>
        <h1>Input</h1>
        <Input placeholder="input..."/>
        <h2>Size</h2>
        <Input placeholder="xs..." xs/>
        <br/><br/>
        <Input placeholder="sm..." sm/>
        <br/><br/>
        <Input placeholder="default..."/>
        <br/><br/>
        <Input placeholder="md..." md/>
        <br/><br/>
        <Input placeholder="lg..." lg/>
      </dev>
    </ThemeProvider>
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
    <dev>
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
    </dev>
  ))
  .add('Tiles', () => (
    <div>
      todo...
    </div>
  ))
;

storiesOf('Grids', module)
  .add('Flex grid', () => (
    <dev>
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
    </dev>
  ))
;

storiesOf('Navigation', module)
  .add('Drawer', () => (
    <dev>
      <Drawer open items={[]} position="relative">
        <DrawerHeader>Title</DrawerHeader>
        <DrawerItem>Item 1</DrawerItem>
        <DrawerItem>Item 2</DrawerItem>
        <DrawerItem>Item 3</DrawerItem>
      </Drawer>
    </dev>
  ))
  .add('AppBar', () => (
    <dev>
      <AppBar title="Title" toggleDrawer={action('toggle')} />
    </dev>
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
      <dev>
        <DangerButton>Button</DangerButton>
      </dev>
    </ThemeProvider>
  ))
  .add('Dark', () => (
    <ThemeProvider theme={dark}>
      <dev>
        <DangerButton>Button</DangerButton>
      </dev>
    </ThemeProvider>
  ))
;
