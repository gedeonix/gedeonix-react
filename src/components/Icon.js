import React from 'react';
import styled from 'styled-components';

export function Icon(props) {
  return <i className={`fa fa-${props.name}`}></i>;
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
