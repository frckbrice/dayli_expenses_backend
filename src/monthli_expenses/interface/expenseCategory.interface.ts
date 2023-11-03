import { WeekExpenses } from 'src/weekli_expenses/interface/expenseCategory.interface';

export interface MonthExpenses {
  id?: string;
  name: string;
  totalexpenses: number;
  decription: string;
  expenses?: WeekExpenses[];
}
