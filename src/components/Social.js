import styled, {css} from "styled-components";
import { Button, styleButton } from './Button';

export const TwitterButton = styled(Button)`${props => styleButton(props, { color: '#ffffff', background: '#0084b4' })}`;
export const FacebookButton = styled(Button)`${props => styleButton(props, { color: '#ffffff', background: '#3b5998' })}`;
export const GoogleButton = styled(Button)`${props => styleButton(props, { color: '#ffffff', background: '#dc4a38' })}`;
export const GithubButton = styled(Button)`${props => styleButton(props, { color: '#ffffff', background: '#404040' })}`;
export const RssButton = styled(Button)`${props => styleButton(props, { color: '#ffffff', background: '#f26522' })}`;
