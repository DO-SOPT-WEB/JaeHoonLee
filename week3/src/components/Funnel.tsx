import { Children, Dispatch, ReactNode, SetStateAction } from "react";
import MainText from "./MainText";
import { MainTexts } from "../constants/MainTextConstants";
import styled from "styled-components";
type FunnelProp = {
  page: number;
  type: "Thing" | "Random";
  setPage: Dispatch<SetStateAction<number>>;
  children: ReactNode;
};
const Funnel = ({ page, type, setPage, children }: FunnelProp) => {
  const childrenArray = Children.toArray(children);

  const getText = () => {
    switch (page) {
      case 0:
        return MainTexts.FirstText;
      case 1:
        return MainTexts.ThingText1;
      case 2:
        return MainTexts.ThingText2;
      case 3:
        return MainTexts.ThingText3;
      case 4:
        return MainTexts.LastText;
      default:
        return "error";
    }
  };

  const handelBtnState = () => {};
  return (
    <FunnelWrapper>
      <MainText> {getText()}</MainText>
      {childrenArray[page]}

      <ButtonWrapper>
        {page >= 1 && page < 4 && (
          <BackBtn onClick={() => setPage((prev) => prev - 1)}>
            {" "}
            이전으로
          </BackBtn>
        )}
        {page < 4 && (
          <NextBtn onClick={() => setPage((prev) => prev + 1)}>
            {page < 1 ? "start" : "다음"}
          </NextBtn>
        )}
        {page == 4 && <ResetBtn onClick={() => setPage(1)}>다시하기</ResetBtn>}
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

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  background-color: yellow;
  color: white;
`;

const NextBtn = styled.button`
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
