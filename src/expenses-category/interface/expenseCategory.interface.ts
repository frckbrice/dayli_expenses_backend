import { Product } from 'src/expenses/interface/expenses.interface';

export interface ExpenseCategory {
  id?: string;
  name: string;
  expenses?: Product[];
  decription: string;
}
