import React from 'react';
import styled, { css } from 'styled-components';

const styles = ({ ...props }) => {
  let size = '50';

  if (props.size) {
    size = props.size;
  }

  return css`
    border-radius: ${props.round ? '50%' : '0'}; 
    height: ${size}px,
    width: ${size}px
  `;
};

const Wrapper = styled.img`${styles}`;

class Avatar extends React.Component {

  render() {
    return (
      <Wrapper {...this.props} src={this.props.url} />
    );
  }
}

Avatar.propTypes = {
  url: React.PropTypes.string
};

export default Avatar;
