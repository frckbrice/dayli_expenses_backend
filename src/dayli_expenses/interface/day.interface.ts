import { ExpenseCategory } from 'src/expenses-category/interface/expenseCategory.interface';

export interface DayExpenses {
  date: Date;
  budget: number;
  totalexpenses: number;
  remainingamount: number;
  day: number;
  expenses?: ExpenseCategory[];
}
