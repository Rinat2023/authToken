import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// import React from 'react';
export const Home = ({ user }) => {
  useEffect(() => {
    if (localStorage.getItem('TOKEN')) {
      return alert('Вы успешно зарегистрировались!');
    }
  }, []);

  if (!localStorage.getItem('TOKEN')) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      <h1>ПРУВЕТИК {localStorage.getItem('name')} </h1>
      <h2>Вы на странице HOME!</h2>
    </div>
  );
};
