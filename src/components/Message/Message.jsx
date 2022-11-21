import React from 'react';
import { StyledMessage } from './styled';

function Message(props) {
  return <StyledMessage {...props}>{props.children}</StyledMessage>;
}

export default Message;
