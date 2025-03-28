import { FC } from "react";
import { twoplants } from "../../../utils";
import TwoPlants from "./plantCards";
import { TwoType } from "../../../@types";

const Plant2: FC = () => {
  return (
    <div className="plants">
      <div className="container grid grid-cols-2 mt-[50px] max-[999px]:grid-cols-1 gap-6">
        {twoplants.map((value: TwoType) => (
          <TwoPlants key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default Plant2;