import styled from "styled-components";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import MainText from "./MainText";

type HeaderProps = {
  page: number;
  setType: Dispatch<SetStateAction<"Thing" | "Random" | "Default">>;
  setPage: Dispatch<SetStateAction<number>>;
  setReset: () => void;
};

const Header: FunctionComponent<HeaderProps> = ({
  page,
  setType,
  setPage,
  setReset,
}) => {
  const resetpage = () => {
    setPage(0);
    setType("Default");
    setReset();
  };
  return (
    <HeaderWrapper>
      <HeaderText>오늘의 술 안주 추천</HeaderText>
      {page >= 1 && <ResetBtn onClick={resetpage}>처음으로</ResetBtn>}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.4rem;
  width: 100%;
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
