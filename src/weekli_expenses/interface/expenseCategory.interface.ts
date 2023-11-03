import { DayExpenses } from 'src/dayli_expenses/interface/day.interface';

export interface WeekExpenses {
  id?: string;
  name: string;
  totalexpenses: number;
  decription: string;
  week: number;
  expenses?: DayExpenses[];
}
