import styled from "styled-components";

export default styled.div`
  *, *:before, *:after {
      box-sizing: inherit;
  }

  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.25rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  h4 {
    font-size: 1.313rem;
  }
  
  h5 {
    font-size: 1.125rem;
  }
  
  h6 {
    font-size: 1rem;
  }

  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};

  margin: 0;
  padding: 0;

  font-family: 'Roboto', sans-serif;  
`;

