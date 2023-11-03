import { Module } from '@nestjs/common';
import { WeekliExpensesService } from './weekli_expenses.service';
import { WeekliExpensesController } from './weekli_expenses.controller';

@Module({
  providers: [WeekliExpensesService],
  controllers: [WeekliExpensesController]
})
export class WeekliExpensesModule {}
