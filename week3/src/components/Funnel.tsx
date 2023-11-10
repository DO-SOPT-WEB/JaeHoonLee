import { Children, Dispatch, ReactNode, SetStateAction } from "react";

type FunnelProp = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  children: ReactNode;
};
const Funnel = ({ page, setPage, children }: FunnelProp) => {
  console.log(children);
  console.log(typeof children);
  const childrenArray = Children.toArray(children);
  return (
    <div>
      {page === 1 && childrenArray[0]}
      {page === 2 && childrenArray[1]}
      {page === 3 && childrenArray[2]}
      {page === 4 && childrenArray[3]}
    </div>
  );
};

export default Funnel;
