import styled, { css } from 'styled-components';

export const StyledMessage = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: ${(props) => props.messageSize || '14px'};

  ${(props) =>
    props.isSuccess &&
    css`
      color: #03aa6d;
    `}

  ${(props) =>
    props.isError &&
    css`
      color: #f44236;
    `}
`;
