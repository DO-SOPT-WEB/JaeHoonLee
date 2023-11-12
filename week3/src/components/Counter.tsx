import styled from "styled-components";
const Counter = ({ time }: number) => {
  return <CounterWrapper>{time}</CounterWrapper>;
};

const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.head};
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  position: relative;
  animation: fadeInDown 3s;
`;

export default Counter;
