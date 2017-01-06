import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
  height: 100%;
  left: ${(props) => (props.open ? '0' : '-300px')};
  padding: 0;
  position: ${(props) => props.position};
  top: 0;
  transition: .25s ease-in-out;
  width: 300px;
  z-index: 1000;
`;

export const DrawerHeader = styled.div`
  background-color: #f0f0f0;
  font-size:30px;
  padding: 25px;
`;

export const DrawerItem = styled.div`
  background-color: #ffffff;
  border-bottom: solid 1px #f6f6f6;
  cursor: pointer;
  padding: 25px;
  text-transform: uppercase;
  &:hover {
    background-color: #f6f6f6;
  }
`;

function Drawer({ open, position, children }) {
  return (
    <Wrapper open={open} position={position}>
      {children}
    </Wrapper>
  );
}

Drawer.propTypes = {
  position: React.PropTypes.string,
  open: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node
};

Drawer.defaultProps = {
  position: 'relative'
};

export default Drawer;
