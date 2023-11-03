import { Module } from '@nestjs/common';
import { MonthliExpensesController } from './monthli_expenses.controller';
import { MonthliExpensesService } from './monthli_expenses.service';

@Module({
  controllers: [MonthliExpensesController],
  providers: [MonthliExpensesService]
})
export class MonthliExpensesModule {}
