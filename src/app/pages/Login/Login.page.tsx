import React, { useState } from 'react';
import { useLogin } from '@zengenti/contensis-react-base/user';
import MainLayout from '~/layouts/main.layout';
import LoginStyled from './Login.styled';
import Link from '~/components/link/link';

const LoginPage = () => {
  const {
    loginUser,
    logoutUser,
    authenticationErrorMessage,
    isAuthenticated,
    isLoading,
    user,
  } = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (isLoading)
    return (
      <MainLayout>
        <LoginStyled>Logging you in...</LoginStyled>
      </MainLayout>
    );
  if (isAuthenticated)
    return (
      <MainLayout>
        <LoginStyled className="flow">
          <h1>Hi {user.firstName || user.username}</h1>
          <p>
            <Link path="/">Navigate to home page</Link>
          </p>
          <button
            id="Logout"
            type="submit"
            onClick={e => {
              e.preventDefault();
              logoutUser();
            }}
          >
            Logout
          </button>
        </LoginStyled>
      </MainLayout>
    );
  return (
    <MainLayout>
      <LoginStyled className="flow">
        <h1>Login</h1>
        <form
          id="LoginForm"
          onSubmit={e => {
            e.preventDefault();
            loginUser(username, password);
          }}
        >
          <label htmlFor="user">Username</label>
          <input id="user" onChange={e => setUsername(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <input
            id="Login"
            type="submit"
            disabled={username && password ? false : true}
            value="Login"
          />
        </form>
        {authenticationErrorMessage ? (
          <p>{authenticationErrorMessage}</p>
        ) : null}
      </LoginStyled>
    </MainLayout>
  );
};

export default LoginPage;
