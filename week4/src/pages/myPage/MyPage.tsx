import * as S from './MyPage.style';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../apis/client';
const MyPage = () => {
  const [data, setData] = useState();
  const { userId } = useParams();

  const getUserInfo = async () => {
    try {
      const res = await client.get(`/api/v1/members/${userId}`);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <S.MyPageWrapper>
      <S.MyPageTitle> MY PAGE</S.MyPageTitle>
      <S.MyPageContainer>
        <S.MyPageImage />
        <S.UserInfoWrapper>
          <S.UserInfoContainer>
            <S.UserInfoText>ID: </S.UserInfoText> <S.UserInfoText>{data?.username}</S.UserInfoText>
          </S.UserInfoContainer>
          <S.UserInfoContainer>
            <S.UserInfoText>닉네임: </S.UserInfoText>
            <S.UserInfoText> {data?.nickname}</S.UserInfoText>
          </S.UserInfoContainer>
        </S.UserInfoWrapper>
      </S.MyPageContainer>
    </S.MyPageWrapper>
  );
};

export default MyPage;
