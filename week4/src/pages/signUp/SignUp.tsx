import * as S from './SignUp.style';
import Button from '../../components/atomComponents/Button';
const SignUp = () => {
  const handleSignUp = () => {
    console.log('ㅎㅇ');
  };
  return (
    <S.SignUpWrapper>
      <S.SignUpTitle>Sign Up</S.SignUpTitle>
      <S.SignUpFormWrapper>
        <S.InputLabel>
          <S.LabelSpan> ID : </S.LabelSpan>
          <S.SignUpInput type="text" placeholder="아이디를 입력해주세요" />
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 비밀번호 : </S.LabelSpan>
          <S.SignUpInput type="text" placeholder="비밀번호를 입력해주세요" />
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 비밀번호 확인 : </S.LabelSpan>
          <S.SignUpInput type="text" placeholder="비밀번호를 다시 한 번 입력해주세요" />
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 닉네임 : </S.LabelSpan>
          <S.SignUpInput type="text" placeholder="닉네임을 입력해주세요" />
        </S.InputLabel>
        <Button type="NEGATIVE" onClick={handleSignUp}>
          회원가입
        </Button>
      </S.SignUpFormWrapper>
    </S.SignUpWrapper>
  );
};

export default SignUp;
