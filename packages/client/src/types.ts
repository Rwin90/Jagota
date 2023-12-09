export interface Report {
  timestamp: string;
  value: number;
  growth: number;
  gap: number;
  margin: number;
  dist: number;
  budget: number;
}

export type ReportData = Record<string, Report[]>;

export interface Summery {
  cost: number;
  margin: number;
  target: number;
  budget: number;
}
