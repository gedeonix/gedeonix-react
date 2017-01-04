export const light = {
  color: '#606060',
  background: '#ffffff',

  button: {
    borderWidth: '1px',
    fontSize: '1rem',
    padding: '0.5em 0.5em',
    radius: '4px'
  },

  default: {
    color: '#606060',
    background: 'transparent',
    border: '#d4d4d4',
    active: '#ffffff',
    hover: {
      border: '#c0c0c0',
      color: '#c0c0c0'
    },
  },

  primary: {
    color: '#ffffff',
    background: '#65bcfe',
    border: '#65bcfe',
    active: '#488fc8',
    hover: {
      border: '#459cde',
      color: '#ffffff'
    }
  },

  success: {
    color: '#ffffff',
    background: '#5acd59',
    border: '#94cd5a',
    active: '#2ba369',
    hover: {
      border: '#32c07f',
      color: '#ffffff'
    }
  },

  warning: {
    color: '#ffffff',
    background: '#ffa924',
    border: '#ffa924',
    active: '#ffd11e',
    hover: {
      border: '#ffd11e',
      color: '#ffffff'
    }
  },

  danger: {
    color: '#ffffff',
    background: '#fc573f',
    border: '#fc573f',
    active: '#dc3816',
    hover: {
      border: '#fc4016',
      color: '#ffffff'
    }
  },

  light: {
    color: '#a0a0a0',
    background: '#fafafa',
    border: '#a0a0a0',
    active: '#d0d0d0',
    hover: {
      border: '#909090',
      color: '#303030'
    }
  },

  dark: {
    color: '#ffffff',
    background: '#4e4f51',
    border: '#4e4f51',
    active: '#8a8b8f',
    hover: {
      border: '#b0b1b6',
      color: '#ffffff'
    }
  }
}

export const dark = {
  ...light,
  color: '#ffffff',
  background: '#606060'
};

export default light;