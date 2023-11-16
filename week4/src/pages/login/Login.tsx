import Button from '../../components/atomComponents/Button';
import * as S from './Login.style';
const Login = () => {
  const handleLogin = () => {
    console.log('gd');
  };
  return (
    <>
      <S.LoginWrapper>
        <S.LoginText>Login</S.LoginText>
        <S.LoginFormWrapper>
          <S.InputLabel htmlFor="id">
            <S.LabelSpan> ID:</S.LabelSpan> <input type="text" />
          </S.InputLabel>

          <S.InputLabel htmlFor="pwd">
            <S.LabelSpan> PW: </S.LabelSpan>
            <input type="text" />
          </S.InputLabel>
        </S.LoginFormWrapper>
        <S.LoginBtnWrapper>
          <Button type="POSITIVE" onClick={handleLogin}>
            로그인
          </Button>
          <Button type="DFAULT" onClick={handleLogin}>
            회원가입
          </Button>
        </S.LoginBtnWrapper>
      </S.LoginWrapper>
    </>
  );
};

export default Login;
