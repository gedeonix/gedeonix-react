import styled, {css} from "styled-components";

const styleButton = (props, button) => css`
  background-color: ${props.outline ? 'transparent' : button.background};
  border-color: ${button.border};
  color: ${props.outline ? button.border : button.color};
  &:hover {
    border-color: ${button.hover.border};
    color: ${button.hover.color};
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
  if (props.xs) return '0.4em 1em';
  if (props.sm) return '0.5em 1em';
  if (props.md) return '0.45em 1em';
  if (props.lg) return '0.4em 1em';
  return props.theme.button.padding;
};

const Button = styled.button`
  border-style: solid;
  border-radius: ${props => props.resetRadius ? 0 : props.round ? '1000px': props.theme.button.radius};
  border-width: ${props => props.theme.button.borderWidth};  
  padding: ${props => padding(props)};
  cursor: pointer;
  font-size: ${props => fontSize(props)};
  margin: 0.1em;
  transition: all .2s ease-in-out;
  ${props => props.block ? 'width: 100%;' : ''}
`;

export const DefaultButton = styled(Button)`${props => styleButton(props, props.theme.default)}`;
export const PrimaryButton = styled(Button)`${props => styleButton(props, props.theme.primary)}`;
export const SuccessButton = styled(Button)`${props => styleButton(props, props.theme.success)}`;
export const WarningButton = styled(Button)`${props => styleButton(props, props.theme.warning)}`;
export const DangerButton = styled(Button)`${props => styleButton(props, props.theme.danger)}`;
export const LightButton = styled(Button)`${props => styleButton(props, props.theme.light)}`;
export const DarkButton = styled(Button)`${props => styleButton(props, props.theme.dark)}`;

export default DefaultButton;