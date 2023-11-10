import { useState } from "react";
import Header from "../components/Header";
import Funnel from "../components/Funnel";
import styled from "styled-components";

import SelectType from "../components/SelectType";
import ThingType1 from "../components/ThingType1";
import ThingType2 from "../components/ThingType2";
import ThingType3 from "../components/ThingType3";
import ThingTypeResult from "../components/ThingTypeResult";
import Counter from "../components/Counter";
import RandomResult from "../components/RandomResult";
import CheckType from "../components/CheckType";
const MainPage = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState<"Thing" | "Random" | "Default">("Default");
  console.log(page);
  return (
    <MainPageWrapper>
      <Header page={page} setType={setType} setPage={setPage}></Header>

      {type === "Default" && <SelectType setType={setType}></SelectType>}

      {type === "Thing" && (
        <Funnel page={page} type={type} setPage={setPage}>
          <CheckType type={type}></CheckType>
          <ThingType1></ThingType1>
          <ThingType2></ThingType2>
          <ThingType3></ThingType3>
          <ThingTypeResult></ThingTypeResult>
          {/* <Counter></Counter>
        <RandomResult></RandomResult> */}
        </Funnel>
      )}
      {type === "Random" && (
        <Funnel page={page} type={type} setPage={setPage}>
          <CheckType type={type}></CheckType>
          <RandomResult></RandomResult>
        </Funnel>
      )}
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
