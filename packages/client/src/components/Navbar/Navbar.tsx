import cntl from "cntl";
import { FC } from "react";

const classes = {
  container: cntl`
  flex bg-white items-center w-full h-12 top-0 left-0 fixed border-b-1 px-4
  `,
  menuIcon: cntl`
  space-y-1
  `,
  menuIconBar: cntl`
  w-6 h-0.5 bg-gray-600
  `,
  title: cntl`
  ml-4 text-lg font-bold text-headingText
  `,
};

export const Navbar: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.menuIcon}>
        <div className={classes.menuIconBar}></div>
        <div className={classes.menuIconBar}></div>
        <div className={classes.menuIconBar}></div>
      </div>
      <span className={classes.title}>React Report</span>
    </div>
  );
};
