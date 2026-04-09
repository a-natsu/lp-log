export type Status = "完了" | "検証" | "実装";

export type Log = {
  id: string;
  title: string;
  lp: string;
  date: string;
  kpi: string;
  status: Status;
  body: string;
};
