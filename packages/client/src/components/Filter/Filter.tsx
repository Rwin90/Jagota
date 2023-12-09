import cntl from "cntl";
import { FC } from "react";
import Select, { SingleValue } from "react-select";
import filter from "../../filter.png";
interface IFilter {
  startYear: number;
  endYear: number;
  onChange: (startYear: number, endYear: number) => void;
}

interface SelectOption {
  value: number;
  label: string;
}

const Years = [
  { value: 2020, label: "2020" },
  { value: 2021, label: "2021" },
  { value: 2022, label: "2022" },
  { value: 2023, label: "2023" },
  { value: 2024, label: "2024" },
  { value: 2025, label: "2025" },
  { value: 2026, label: "2026" },
];

const selectStyle = {
  indicatorSeparator: (styles: any) => ({
    ...styles,
    ...{ display: "none" },
  }),
  singleValue: (styles: any) => ({
    ...styles,
    ...{ color: "#005fdb", fontWeight: "bold", fontSize: "12px" },
  }),
  control: (styles: any) => ({
    ...styles,
    ...{
      background: "#eee",
      border: "1px solid transparent",
    },
  }),
};

const classes = {
  container: cntl`
    flex bg-white border border-gray-200 rounded items-center justify-between w-[370px] h-[60px] my-4 self-end relative z-10 px-2
  `,
  selectBox: cntl`
    flex items-center
  `,
  icon: cntl`
    w-[16px] h-[16px]
  `,
  filterText: cntl`
    text-sm font-bold text-bodyText
  `,
  select: cntl`
    ml-2 
  `,
};

export const Filter: FC<IFilter> = ({ onChange, endYear, startYear }) => {
  const startOption = Years.find((item) => item.value === startYear);
  const endOption = Years.find((item) => item.value === endYear);
  const onStartChange = (value: SingleValue<SelectOption>) => {
    if (value?.value! < endYear) {
      onChange(value?.value!, endYear);
    }
  };

  const onEndChange = (value: SingleValue<SelectOption>) => {
    if (value?.value! > startYear) {
      onChange(startYear, value?.value!);
    }
  };
  return (
    <div className={classes.container}>
      <span className={classes.icon}>
        <img src={filter} alt="filter" />
      </span>
      <span className={classes.filterText}> Compare Years: </span>
      <div className={classes.selectBox}>
        <Select
          className={classes.select}
          classNamePrefix="select"
          name="startYear"
          options={Years}
          onChange={onStartChange}
          value={startOption}
          styles={selectStyle}
        />
        <span className="ml-2">to</span>
        <Select
          className={classes.select}
          classNamePrefix="select"
          name="endYear"
          options={Years}
          onChange={onEndChange}
          value={endOption}
          styles={selectStyle}
        />
      </div>
    </div>
  );
};
