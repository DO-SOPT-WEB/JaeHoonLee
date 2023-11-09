import { useState } from "react";
import Header from "../components/Header";

const MainPage = () => {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Header></Header>
      MainPage
    </div>
  );
};

export default MainPage;
