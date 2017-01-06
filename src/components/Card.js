import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  padding: 25px;
  border-right: 2px;
`;

const Card = ({ children }) =>
  (
    <Wrapper>{children}</Wrapper>
  )
;

Card.propTypes = {
  children: React.PropTypes.node
};

export default Card;
