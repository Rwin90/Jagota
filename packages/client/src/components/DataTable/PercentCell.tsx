import { ICellTextProps } from "ka-table/props";

export const PercentCell: React.FC<ICellTextProps> = ({ value }) => {
  return (
    <span className={value > 0 ? "text-green" : "text-red"}>
      {value > 0 ? `+${value}` : value}%
    </span>
  );
};
