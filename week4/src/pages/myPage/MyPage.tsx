import * as S from './MyPage.style';

const MyPage = () => {
  return (
    <S.MyPageWrapper>
      <S.MyPageTitle> MY PAGE</S.MyPageTitle>
      <S.MyPageContainer>
        <S.MyPageImage />
        <S.UserInfoWrapper>
          <S.UserInfoContainer>
            <S.UserInfoText>ID: </S.UserInfoText> <S.UserInfoText> </S.UserInfoText>
          </S.UserInfoContainer>
          <S.UserInfoContainer>
            <S.UserInfoText>닉네임: </S.UserInfoText> <S.UserInfoText> </S.UserInfoText>
          </S.UserInfoContainer>
        </S.UserInfoWrapper>
      </S.MyPageContainer>
    </S.MyPageWrapper>
  );
};

export default MyPage;
