import React from 'react';
import styled from 'styled-components';

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;

const StyledContainer = styled.div`
  max-width: 670px;
`;
