import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #00afcc;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const Heading = styled.div`
  text-align: left;
  display: flex;
  flex-grow: 2;
`;

const LinkContainer = styled.div`
  font-size: 16px;
  margin-top: 6px;
`;

const AppBar = ({ title }) => {

  return (
    <Wrapper>
      <Heading>{title}</Heading>
    </Wrapper>
  );
};

AppBar.propTypes = {
  title: React.PropTypes.string
};

export default AppBar;
