import { MonthExpenses } from 'src/monthli_expenses/interface/expenseCategory.interface';

export interface ExpenseCategory {
  name: string;
  totalExpense?: number;
  decription: string;
  expenses?: MonthExpenses[];
}
