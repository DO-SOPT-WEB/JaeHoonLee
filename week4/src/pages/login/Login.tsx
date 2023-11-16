import React from 'react';
import styled from 'styled-components';
const Login = () => {
  return (
    <>
      <LoginWrapper></LoginWrapper>
    </>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  width: 30rem;
  height: 25rem;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;

const LoginHeadder = styled.header``;

const LoginForm = styled.div``;
const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Login;
