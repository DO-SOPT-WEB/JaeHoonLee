import * as S from './MyPage.style';

const MyPage = () => {
  return (
    <S.SignUpWrapper>
      <S.SignUpTitle> MY PAGE</S.SignUpTitle>
      <S.SignUpContainer>
        <S.SignUpImage />
        <S.UserInfoWrapper>
          <S.UserInfoContainer>
            <S.UserInfoText>ID: </S.UserInfoText> <S.UserInfoText> </S.UserInfoText>
          </S.UserInfoContainer>
          <S.UserInfoContainer>
            <S.UserInfoText>닉네임: </S.UserInfoText> <S.UserInfoText> </S.UserInfoText>
          </S.UserInfoContainer>
        </S.UserInfoWrapper>
      </S.SignUpContainer>
    </S.SignUpWrapper>
  );
};

export default MyPage;
