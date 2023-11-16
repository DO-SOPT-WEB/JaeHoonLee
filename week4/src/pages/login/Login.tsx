import Button from '../../components/atomComponents/Button';
import useFormInput from '../../hooks/useFormInput';
import * as S from './Login.style';
import { client } from '../../apis/client';
import useRouter from '../../hooks/useRouter';
import { isAxiosError } from 'axios';
const Login = () => {
  const userId = useFormInput();
  const userPwd = useFormInput();

  const { routeTo } = useRouter();
  const handleLogin = async () => {
    try {
      const res = await client.post('/api/v1/members/sign-in', {
        username: userId.value,
        password: userPwd.value,
      });

      console.log(res);
    } catch (err) {
      if (isAxiosError(err) && err.response) {
        if (err.response.status == 400) {
          alert('아이디 혹은 비밀번호가 틀립니다.');
        } else {
          console.log(err.response.status);
        }
      }
    }
  };
  const handleSingUp = () => {
    routeTo('/signup');
  };
  return (
    <>
      <S.LoginWrapper>
        <S.LoginText>Login</S.LoginText>
        <S.LoginFormWrapper>
          <S.InputLabel htmlFor="id">
            <S.LabelSpan> ID</S.LabelSpan> <input type="text" {...userId} />
          </S.InputLabel>

          <S.InputLabel htmlFor="pwd">
            <S.LabelSpan> PW </S.LabelSpan>
            <input type="text" {...userPwd} />
          </S.InputLabel>
        </S.LoginFormWrapper>
        <S.LoginBtnWrapper>
          <Button type="POSITIVE" onClick={handleLogin}>
            로그인
          </Button>
          <Button type="DFAULT" onClick={handleSingUp}>
            회원가입
          </Button>
        </S.LoginBtnWrapper>
      </S.LoginWrapper>
    </>
  );
};

export default Login;
