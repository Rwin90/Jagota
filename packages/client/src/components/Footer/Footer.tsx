import cntl from "cntl";
import { FC } from "react";
import { Summery } from "../../types";

const classes = {
  container: cntl`
  h-[110px] w-full border-t-4 border-white flex justify-end items-center
  `,
  keyValuePair: cntl`
  w-[100px]
  `,
  key: cntl`
    text-secondaryText mb-2 font-bold text-xs
  `,
  value: cntl`
   text-bodyText font-bold  text-sm
  `,
};

interface IFooterProps extends Summery {}
export const Footer: FC<IFooterProps> = ({ target, margin, cost, budget }) => {
  return (
    <div className={classes.container}>
      <div className={classes.keyValuePair}>
        <div className={classes.key}>Target</div>
        <div className={classes.value}>{target}</div>
      </div>
      <div className={classes.keyValuePair}>
        <div className={classes.key}>Margin</div>
        <div className={classes.value}>{margin}</div>
      </div>
      <div className={classes.keyValuePair}>
        <div className={classes.key}>Cost</div>
        <div className={classes.value}>{cost}</div>
      </div>
      <div className={classes.keyValuePair}>
        <div className={classes.key}>Budget</div>
        <div className={classes.value}>{budget}</div>
      </div>
    </div>
  );
};
