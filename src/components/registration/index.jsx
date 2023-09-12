import { Paper, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { AppButton } from '../../UI/Button';
import { asyncRegister } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  useEffect(() => {
    if (localStorage.getItem('TOKEN')) {
      navigate('/home');
    }
  });

  const UserName = React.useRef();
  const userEmail = React.useRef();
  const password = React.useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      name: UserName.current.value,
      email: userEmail.current.value,
      password: password.current.value,
    };
    if (!user.email.includes('@')) {
      alert('email nepravilny');
    } else {
      if (user.name && user.email && user.password) {
        const data = await asyncRegister(user);
        const result = await data.json();
        const { token, role, name, email } = result;
        if (email && token) {
          navigate('/home', { replace: true, state: { token, role, name } });
          localStorage.setItem('TOKEN', token);
          localStorage.setItem('name', name);
        } else {
          navigate('/');
        }
      }
    }
  };

  return (
    <div>
      <Paper>
        <Typography variant="h3">Sign UP</Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '342px',
            gap: '5px',
          }}
          onSubmit={submitHandler}
        >
          <TextField inputRef={UserName} label="name.."></TextField>
          <TextField inputRef={userEmail} label="email.."></TextField>
          <TextField inputRef={password} label="password.."></TextField>
          <AppButton type={'submit'}>Submit</AppButton>
        </form>
      </Paper>
    </div>
  );
};
