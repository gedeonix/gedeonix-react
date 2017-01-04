import styled, { css } from "styled-components";

const styleButton = (props) => css`
  background-color: ${props.background};
  border-color: ${props.border};
  color: ${props.color};
  &:hover {
    border-color: ${props.hover.border};
    color: ${props.hover.color};
  }
`;

const Button = styled.button`
  border-style: solid;
  border-radius: 3px;
  border-width: 2px;  
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

export const DefaultButton = styled(Button)`
  ${props => styleButton(props.theme.default)}
`;

export const PrimaryButton = styled(Button)`
  ${props => styleButton(props.theme.primary)}
`;

export const SuccessButton = styled(Button)`
  ${props => styleButton(props.theme.success)}
`;

export const WarningButton = styled(Button)`
  ${props => styleButton(props.theme.warning)}
`;

export const DangerButton = styled(Button)`
  ${props => styleButton(props.theme.danger)}
`;

export const LightButton = styled(Button)`
  ${props => styleButton(props.theme.light)}
`;

export const DarkButton = styled(Button)`
  ${props => styleButton(props.theme.dark)}
`;

export default DefaultButton;