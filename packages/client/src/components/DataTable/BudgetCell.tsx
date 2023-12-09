import cntl from "cntl";
import { ICellTextProps } from "ka-table/props";

const classes = {
  cell: cntl`
    flex items-center
  `,
  text: cntl`
    w-[10px]
  `,
  label: cntl`
    min-w-[50px] h-[24px] bg-gray-300 ml-4 px-2 py-1 rounded-lg flex items-center justify-center
  `,
};
export const BudgetCell: React.FC<ICellTextProps> = ({ rowData }) => {
  return (
    <div className={classes.cell}>
      <div className={classes.text}> {rowData.budget}</div>
      <div className={classes.label}>{rowData.value}%</div>
    </div>
  );
};
