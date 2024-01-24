import styled from "styled-components";
import RecomendPhrase from "../constants/RecomendPhrase";
type CheckTypeProps = {
  type: "Thing" | "Random";
};

const CheckType = ({ type }: CheckTypeProps) => {
  return <CheckTypeWrapper>{RecomendPhrase[type]}</CheckTypeWrapper>;
};

const CheckTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 30rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.head0};
`;
export default CheckType;
