import { Children, Dispatch, ReactNode, SetStateAction } from "react";
import MainText from "./MainText";
import { MainTexts } from "../constants/MainTextConstants";
import styled from "styled-components";
type FunnelProp = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  children: ReactNode;
};
const Funnel = ({ page, setPage, children }: FunnelProp) => {
  const childrenArray = Children.toArray(children);

  const getText = () => {
    switch (page) {
      case 0:
      case 1:
        return MainTexts.FirstText;
      case 2:
        return MainTexts.ThingText1;
      case 3:
        return MainTexts.ThingText2;
      case 4:
        return MainTexts.ThingText3;
      case 5:
        return MainTexts.LastText;
    }
  };

  return (
    <FunnelWrapper>
      <MainText> {getText()}</MainText>
      {childrenArray[page]}

      <ButtonWrapper>
        {page < 5 && (
          <Btn onClick={() => setPage((prev) => prev + 1)}>다음</Btn>
        )}
        {page >= 5 && <ResetBtn>다시하기</ResetBtn>}
      </ButtonWrapper>
    </FunnelWrapper>
  );
};

const FunnelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;
  gap: 5rem;
  width: 120rem;
  height: 50rem;
  border: 5px solid ${({ theme }) => theme.colors.subBlue};
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  background-color: red;
  color: white;
`;

const ResetBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  background-color: blue;
  color: white;
`;
export default Funnel;
