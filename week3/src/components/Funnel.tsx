import {
  useEffect,
  useState,
  Children,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import MainText from "./MainText";
import { MainTexts } from "../constants/MainTextConstants";
import styled from "styled-components";
import { StateTypes } from "../types/stateTypes";

type FunnelProp = {
  page: number;
  type: "Thing" | "Random";
  setPage: Dispatch<SetStateAction<number>>;
  state: StateTypes;
  children: ReactNode;
};
const Funnel = ({ page, type, setPage, state, children }: FunnelProp) => {
  const [activeBtn, setActiveBtn] = useState(false);

  const childrenArray = Children.toArray(children);
  console.log(state.countryType);
  console.log(page);
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

  const handelBtnState = () => {
    if (page === 0) {
      setActiveBtn(true);
      console.log("20");
    } else if (page === 1 && state.countryType !== "") {
      setActiveBtn(true);
    } else if (page === 1 && state.countryType === "") {
      setActiveBtn(false);
    } else if (page === 2 && state.ingredient !== "") {
      setActiveBtn(true);
    } else if (page === 2 && state.ingredient === "") {
      setActiveBtn(false);
    } else if (page === 3 && state.ingredient !== "") {
      setActiveBtn(true);
    } else if (page === 3 && state.ingredient === "") {
      setActiveBtn(false);
    } else {
      setActiveBtn(false);
      console.log("30");
    }
  };

  const handleNextBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (activeBtn) {
      setPage((prev) => prev + 1);
    } else {
      e.preventDefault();
    }
  };
  useEffect(() => {
    handelBtnState();
  }, [page, state.countryType]);

  return (
    <FunnelWrapper>
      <MainText> {getText()}</MainText>
      {childrenArray[page]}

      <ButtonWrapper>
        {page >= 1 && page < 4 && (
          <BackBtn onClick={() => setPage((prev) => prev - 1)}> 이전</BackBtn>
        )}
        {page < 4 && (
          <NextBtn $activeBtn={activeBtn} onClick={(e) => handleNextBtn(e)}>
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
  width: 20rem;
  justify-content: center;
  gap: 1rem;
`;

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;
  height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.body2};
  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: white;
`;

const NextBtn = styled.button<{ $activeBtn: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.body2};
  background-color: ${({ $activeBtn, theme }) =>
    $activeBtn ? theme.colors.mainBlue : theme.colors.backgroundGrey};
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
