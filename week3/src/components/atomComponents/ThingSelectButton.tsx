import React from "react";
import styled from "styled-components";

type ThingSelectProps = {
  value: string;
  $active: boolean;
  handleButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
};

const ThingSelectButton = ({
  value,
  $active,
  handleButtonClick,
  name,
}: ThingSelectProps) => {
  return (
    <>
      <ThingSelectBtn
        value={value}
        $active={$active}
        onClick={handleButtonClick}
      >
        {name}
      </ThingSelectBtn>
    </>
  );
};

const ThingSelectBtn = styled.button<{ $active: boolean }>`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.mainWhite : theme.colors.btnGreen};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.btnGreen : theme.colors.mainWhite};

  border: 3px solid ${({ theme }) => theme.colors.btnGreen}; /* Green */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 25rem;

  transition-duration: 0.4s;
  font-size: ${({ theme }) => theme.fontSize.head1};

  &:hover {
    color: #12fb0c;
  }
`;
export default ThingSelectButton;
