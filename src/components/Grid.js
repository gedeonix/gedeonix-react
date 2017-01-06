import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Col = styled.div`
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 0%;
  padding: 0 0.5rem 0.5rem;
`;
