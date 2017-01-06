import React from 'react';
import styled, {css} from "styled-components";

export const styleButton = (props, button) => css`
  background-color: ${props.outline ? 'transparent' : button.background};
  border-color: ${button.border} || 'inherited';
  color: ${props.outline ? (button.border || 'inherited') : button.color || 'inherited'};
  &:hover {
    border-color: ${button.hover == undefined ? 'inherited' : button.hover.border};
    color: ${button.hover == undefined ? 'inherited' : button.hover.color};
  }
  &:disabled {
    background-color: #e0e0e0;
    border-color: #e0e0e0;
    color: #808080 !important;
    cursor: not-allowed;
  }
`;

const fontSize = (props) => {
  if (props.xs) return '0.7rem';
  if (props.sm) return '0.8rem';
  if (props.md) return '1.2rem';
  if (props.lg) return '1.6rem';
  return props.theme.button.fontSize;
};

const padding = (props) => {
  if (props.square || props.circle) return '0';
  if (props.xs) return '0.4em 1em';
  if (props.sm) return '0.5em 1em';
  if (props.md) return '0.45em 1em';
  if (props.lg) return '0.4em 1em';
  return props.theme.button.padding;
};

export const Button = styled.button`
  border-style: solid;
  border-radius: ${props => props.resetRadius ? 0 : props.round ? '1000px': props.circle ? '50%': props.theme.button.radius};
  border-width: ${props => props.theme.button.borderWidth};  
  padding: ${props => padding(props)};
  cursor: pointer;
  font-size: ${props => fontSize(props)};
  margin: 0.1em;
  transition: all .2s ease-in-out;
  ${props => props.block ? 'width: 100%;' : ''}
  text-align: center;
  ${props => props.square || props.circle ? 'height: 40px; width: 40px;' : ''}
`;

/*
export const Button = ({ disabled, type, ...props }) => {
  return <button {...props} type={type} disabled={disabled} />
};
*/

export const DefaultButton = styled(Button)`${props => styleButton(props, props.theme.default)}`;
export const PrimaryButton = styled(Button)`${props => styleButton(props, props.theme.primary)}`;
export const SuccessButton = styled(Button)`${props => styleButton(props, props.theme.success)}`;
export const WarningButton = styled(Button)`${props => styleButton(props, props.theme.warning)}`;
export const DangerButton = styled(Button)`${props => styleButton(props, props.theme.danger)}`;
export const LightButton = styled(Button)`${props => styleButton(props, props.theme.light)}`;
export const DarkButton = styled(Button)`${props => styleButton(props, props.theme.dark)}`;

export default DefaultButton;