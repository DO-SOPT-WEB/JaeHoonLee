import React, { Dispatch, SetStateAction } from "react";

type SelectTypeProps = {
  setType: Dispatch<SetStateAction<"Thing" | "Random" | "Default">>;
};

const SelectType = ({ setType }: SelectTypeProps) => {
  return <div>SelectType</div>;
};

export default SelectType;
