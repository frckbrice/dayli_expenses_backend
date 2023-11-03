import { Module } from '@nestjs/common';
import { DayliExpensesController } from './dayli_expenses.controller';
import { DayliExpensesService } from './dayli_expenses.service';

@Module({
  controllers: [DayliExpensesController],
  providers: [DayliExpensesService]
})
export class DayliExpensesModule {}
