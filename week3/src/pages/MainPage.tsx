import { useState } from "react";
import Header from "../components/Header";
import Funnel from "../components/Funnel";
import styled from "styled-components";

import SelectOption from "../components/SelectOption";
import ThingType1 from "../components/ThingType1";
import ThingType2 from "../components/ThingType2";
import ThingType3 from "../components/ThingType3";

const MainPage = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState<"Thing" | "Random" | "Default">("Default");

  return (
    <MainPageWrapper>
      <Header page={page} setPage={setPage}></Header>

      <Funnel page={page} setPage={setPage}>
        <SelectOption></SelectOption>
        <ThingType1></ThingType1>
        <ThingType2></ThingType2>
        <ThingType3></ThingType3>
      </Funnel>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
