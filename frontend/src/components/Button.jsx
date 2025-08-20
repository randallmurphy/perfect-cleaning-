import React from 'react';
import { Button as MuiButton } from '@mui/material';

 function Button({ children, onClick, type = 'button', variant = 'contained', color = 'primary' }) {
  return (
    <MuiButton onClick={onClick} type={type} variant={variant} color={color}>
      {children}
    </MuiButton>
  );
}
export default Button