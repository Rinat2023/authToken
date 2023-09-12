import { InputAdornment, TextField, styled } from '@mui/material';

import React from 'react';

export const Input = ({ icon, placeholder, ...props }) => {
  return (
    <InputStyle
      focused={false}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      placeholder={placeholder}
      {...props}
    ></InputStyle>
  );
};

const InputStyle = styled(TextField)(({ borderColor }) => ({
  border: `2px solid ${borderColor}`,
  width: '20vw',
}));
