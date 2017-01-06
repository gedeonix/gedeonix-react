import React from 'react';
import styled from 'styled-components';

export function Icon(props) {
  let attr = props.spin ? 'fa-spin ' : props.pulse ? 'fa-pulse ' : '';
  return <i className={`fa ${attr}fa-${props.name}`}></i>;
}

const Wrapper = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export function IconButton({ onClick, icon }) {
  return (
    <Wrapper className="icon-button" onClick={onClick}>
      <Icon name={icon} />
    </Wrapper>
  );
}

IconButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};
