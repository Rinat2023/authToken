import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';

export const AppButton = ({
  children,
  variant = 'contained',
  size = 'medium',
  icon,
  disabled,
  color,
  fullWidth,
  type,
}) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      color={color}
      variant={variant}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)({
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: 'violet',
  },
});
