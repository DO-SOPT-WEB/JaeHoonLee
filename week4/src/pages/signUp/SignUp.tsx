import * as S from './SignUp.style';
import Button from '../../components/atomComponents/Button';
import useFormInput from '../../hooks/useFormInput';
import useRouter from '../../hooks/useRouter';
import { client } from '../../apis/client';
const SignUp = () => {
  const userId = useFormInput();
  const userPwd = useFormInput();
  const checkUserPwd = useFormInput();
  const userNickname = useFormInput();

  const { routeTo } = useRouter();
  const handleSignUp = async () => {
    try {
      const res = await client.post(`/api/v1/members`, {
        username: userId.value,
        password: userPwd.value,
        nickname: userNickname.value,
      });
      if (res.status === 201) {
        routeTo('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <S.SignUpWrapper>
      <S.SignUpTitle>Sign Up</S.SignUpTitle>
      <S.SignUpFormWrapper>
        <S.InputLabel>
          <S.LabelSpan> ID : </S.LabelSpan>
          <S.SignUpInput type="text" placeholder="아이디를 입력해주세요" {...userId} />
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 비밀번호 : </S.LabelSpan>
          <S.SignUpInput type="text" placeholder="비밀번호를 입력해주세요" {...userPwd} />
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 비밀번호 확인 : </S.LabelSpan>
          <S.SignUpInput
            type="text"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            {...checkUserPwd}
          />
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 닉네임 : </S.LabelSpan>
          <S.SignUpInput type="text" placeholder="닉네임을 입력해주세요" {...userNickname} />
        </S.InputLabel>
        <Button type="NEGATIVE" onClick={handleSignUp}>
          회원가입
        </Button>
      </S.SignUpFormWrapper>
    </S.SignUpWrapper>
  );
};

export default SignUp;
