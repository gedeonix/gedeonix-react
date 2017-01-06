import styled from 'styled-components';

const textColor = '#c0c0c0';
const backgroundColor = '#ffffff';

export const Table = styled.table`
  font-size: inherit;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  
  background-color: ${backgroundColor};
  margin-bottom: 10px;
`;

export const Th = styled.th`
    text-align: center;
    vertical-align: middle;
    color: ${textColor};
    
    border: 1px solid #d0d0d0;
    border-width: 0 0 1px;
    padding: 10px 8px;
`;

export const Td = styled.td`
    text-align: left;
    vertical-align: middle;
    
    border: 1px solid #d0d0d0;
    border-width: 0 0 1px;
    padding: 4px 8px;
`;
