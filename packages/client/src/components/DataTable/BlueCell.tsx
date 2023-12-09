import { ICellTextProps } from "ka-table/props";

export const BlueCell: React.FC<ICellTextProps> = ({ value }) => {
  return <span className="text-blue">{value}</span>;
};
