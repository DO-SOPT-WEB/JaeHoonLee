import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  border-radius: 5px;
  gap: 4rem;
  width: 45rem;
  height: 35rem;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;

export const LoginText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head1};
  color: ${({ theme }) => theme.colors.mainBlack};
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
`;

export const InputLabel = styled.label`
  display: flex;
  width: 20rem;
  margin-bottom: 1rem;
`;
export const LabelSpan = styled.span`
  width: 5rem;
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
export const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
