import React from 'react';
import styled from 'styled-components';

const breakpointSm ='40em';
const breakpointMd = '64em';
const breakpointLg = '90em';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: ${breakpointLg}) {
     max-width: ${breakpointLg};
  }
`;

export const FluidContainer = styled.div`

`;

