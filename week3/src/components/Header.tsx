import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderText>오늘의 저녁 추천</HeaderText>
        <ResetBtn>처음으로</ResetBtn>
      </HeaderWrapper>
    </div>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.4rem;
  background-color: ${({ theme }) => theme.colors.backgroundBeige};
`;
const HeaderText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head1};
`;

const ResetBtn = styled.button`
  position: absolute;
  right: 5rem;
  width: 8rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  border-radius: 7px;
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
export default Header;
