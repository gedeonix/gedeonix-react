import styled, {css} from "styled-components";

const styleButton = (props) => css`
  background-color: ${props.background};
  border-color: ${props.border};
  color: ${props.color};
  &:hover {
    border-color: ${props.hover.border};
    color: ${props.hover.color};
  }
`;

const fontSize = (props) => {
  if (props.xs) return '0.6rem';
  if (props.sm) return '0.8rem';
  if (props.md) return '1.2rem';
  if (props.lg) return '1.6rem';
  return props.theme.button.fontSize;
};

const padding = (props) => {
  if (props.xs) return '0.5em 1em';
  if (props.sm) return '0.5em 1em';
  if (props.md) return '0.45em 1em';
  if (props.lg) return '0.4em 1em';
  return props.theme.button.padding;
};

const Button = styled.button`
  border-style: solid;
  border-radius: ${props => props.theme.button.radius};
  border-width: ${props => props.theme.button.borderWidth};  
  padding: ${props => padding(props)};
  cursor: pointer;
  font-size: ${props => fontSize(props)};
  margin: 0.1em;
`;

export const DefaultButton = styled(Button)`${props => styleButton(props.theme.default)}`;
export const PrimaryButton = styled(Button)`${props => styleButton(props.theme.primary)}`;
export const SuccessButton = styled(Button)`${props => styleButton(props.theme.success)}`;
export const WarningButton = styled(Button)`${props => styleButton(props.theme.warning)}`;
export const DangerButton = styled(Button)`${props => styleButton(props.theme.danger)}`;
export const LightButton = styled(Button)`${props => styleButton(props.theme.light)}`;
export const DarkButton = styled(Button)`${props => styleButton(props.theme.dark)}`;

export default DefaultButton;