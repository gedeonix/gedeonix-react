import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.default.background};
  border: 2px solid ${props => props.theme.default.border};  
  border-radius: 3px;
  color: ${props => props.theme.default.color};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  &:hover {
    border-color: ${props => props.theme.default.hover};
    color: #c0c0c0;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primary.background};
  border-color: ${props => props.theme.primary.border};
  color: ${props => props.theme.primary.color};
  &:hover {
    border-color: ${props => props.theme.primary.hover};
    color: #ffffff;
  }
`;

export const SuccessButton = styled(Button)`
  background-color: ${props => props.theme.success.background};
  border-color: ${props => props.theme.success.border};
  color: ${props => props.theme.success.color};
  &:hover {
    border-color: ${props => props.theme.success.hover};
    color: #ffffff;
  }
`;

export const WarningButton = styled(Button)`
  background-color: ${props => props.theme.warning.background};
  border-color: ${props => props.theme.warning.border};
  color: ${props => props.theme.warning.color};
  &:hover {
    border-color: ${props => props.theme.warning.hover};
    color: #ffffff;
  }
`;

export const DangerButton = styled(Button)`
  background-color: ${props => props.theme.danger.background};
  border-color: ${props => props.theme.danger.border};
  color: ${props => props.theme.danger.color};
  &:hover {
    border-color: ${props => props.theme.danger.hover};
    color: #ffffff;
  }
`;

export default Button;