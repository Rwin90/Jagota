import { DataType } from "ka-table";
import { IColumn } from "../components/DataTable";
import { BlueCell } from "../components/DataTable/BlueCell";
import { BudgetCell } from "../components/DataTable/BudgetCell";
import { PercentCell } from "../components/DataTable/PercentCell";

export const columns: IColumn[] = [
  {
    key: "value",
    title: "Value",
    dataType: DataType.Number,
    isEditable: false,
    CustomCell: BlueCell,
    style: { width: "10%" },
  },
  {
    key: "growth",
    title: "Growth %",
    dataType: DataType.Number,
    style: { width: "20%" },
    CustomCell: PercentCell,
    isEditable: false,
  },
  {
    key: "gap",
    title: "Gap%",
    dataType: DataType.Number,
    CustomCell: PercentCell,
    style: { width: "15%" },
    isEditable: false,
  },
  {
    key: "margin",
    title: "Margin",
    dataType: DataType.Number,
    isEditable: false,
    style: { width: "15%" },
    cellFormater: (value: number) => value + "%",
  },
  {
    key: "dist",
    title: "Dist.",
    style: { width: "10%" },
    dataType: DataType.Number,
    isEditable: false,
  },
  {
    key: "budget",
    title: "Budget",
    dataType: DataType.Number,
    style: { width: "20%" },
    isEditable: false,
    CustomCell: BudgetCell,
  },
];
