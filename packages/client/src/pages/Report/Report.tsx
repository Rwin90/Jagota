import { FC, useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Filter } from "../../components/Filter/Filter";
import cntl from "cntl";
import { DataTable } from "../../components/DataTable";
import sort from "../../swap.png";
import { ReportData, Summery } from "../../types";
import { columns } from "./column";
const classes = {
  container: cntl`
    bg-gray-100 h-full p-4 flex flex-col items-center
  `,
  tableContainer: cntl`
    h-full mb-10   border-gray-300 flex  overflow-auto 	max-w-full items-baseline
  `,
  tableBox: cntl`
    w-[550px]   border-r border-gray-300 shrink-0	 border-t border-b
  `,
  tableBoxHeader: cntl`
    bg-white p-4 text-blue font-bold flex items-center 
  `,
  icon: cntl`
    w-[16px] h-[16px] ml-2
  `,
  errorBox: cntl`
  self-center font-bold text-red
  `,
};

export const Report: FC = () => {
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2024);
  const [data, setData] = useState<ReportData>({});
  const [error, setError] = useState(false);
  const summery = useSummery();

  const onYearChange = (startYear: number, endYear: number) => {
    setEndYear(endYear);
    setStartYear(startYear);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `http://localhost:3030/report/byYear?startYear=${startYear}&endYear=${endYear}`;
        const result = (await fetch(url)).json();
        const data = await result;
        setData(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [startYear, endYear]);

  return (
    <div className={classes.container}>
      <Filter onChange={onYearChange} startYear={startYear} endYear={endYear} />
      <div className={classes.tableContainer}>
        {error && (
          <div className={classes.errorBox}>
            Something went wrong, please try again later!
          </div>
        )}
        {Object.keys(data).map((year) => (
          <div key={year} className={classes.tableBox}>
            <div className={classes.tableBoxHeader}>
              {year}
              <span className={classes.icon}>
                <img src={sort} alt="sort" />
              </span>
            </div>
            <DataTable
              columns={columns}
              data={data[year as keyof typeof data]}
              rowKeyField="timestamp"
            />
          </div>
        ))}
      </div>

      <Footer {...summery} />
    </div>
  );
};

// in a real world example it would take the data as an input and do the calculation on it
const useSummery = (): Summery => ({
  budget: 56,
  cost: 94,
  margin: 14,
  target: 100,
});
