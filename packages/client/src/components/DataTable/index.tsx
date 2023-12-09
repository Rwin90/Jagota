import { IKaTableProps, Table } from "ka-table/Components/Table/Table";
import { EditingMode, SortingMode } from "ka-table/enums";
import { useTable } from "ka-table/hooks/UseTable";
import { Column } from "ka-table/models";
import { ICellTextProps } from "ka-table/props";
import { useEffect } from "react";
import "ka-table/style.scss";
import "./style.scss";

export interface IColumn extends Column {
  cellFormater?: (value: any) => string;
  CustomCell?: React.FC<React.PropsWithChildren<ICellTextProps>>;
}
export interface IDataTableProps extends IKaTableProps {
  columns: IColumn[];
  data: any[];
}

export const DataTable: React.FC<IDataTableProps> = ({
  data,
  columns,
  rowKeyField = "id",
  ...resProps
}) => {
  const table = useTable();

  useEffect(() => {
    table.updateData(data);
  }, [data, table]);

  return (
    <div>
      <div className="table">
        <Table
          columns={columns}
          data={data}
          table={table}
          editingMode={EditingMode.Cell}
          rowKeyField={rowKeyField}
          sortingMode={SortingMode.Single}
          format={(props): any => {
            const col = props.column as IColumn;
            const value = props.value;
            if (col.cellFormater) {
              return col.cellFormater(value);
            }
          }}
          childComponents={{
            noDataRow: {
              content: () => "No data to show!",
            },
            cellText: {
              content: (props): any => {
                const col = props.column as IColumn;
                const CustomCell = col.CustomCell;
                if (CustomCell) {
                  return <CustomCell {...props} />;
                }
              },
            },
          }}
          {...resProps}
        />
      </div>
    </div>
  );
};
