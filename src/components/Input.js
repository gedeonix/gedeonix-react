import React from 'react';
import styled from "styled-components";

const fontSize = (props) => {
  if (props.xs) return '0.7rem';
  if (props.sm) return '0.8rem';
  if (props.md) return '1.2rem';
  if (props.lg) return '1.6rem';
  return props.theme.input.fontSize;
};

export const Input = styled.input`
  background-color: ${props => props.theme.input.background};
  border: 1px solid ${props => props.theme.input.border};
  border-radius: ${props => props.theme.input.radius};
  font-size: ${props => fontSize(props)};
  padding: ${props => props.theme.input.padding};
  width: 100%;
  &:focus {
    background-color: ${props => props.theme.input.focus.background};
  }
  
`;
