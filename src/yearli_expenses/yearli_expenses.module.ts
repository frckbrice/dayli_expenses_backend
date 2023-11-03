import { Module } from '@nestjs/common';
import { YearliExpensesController } from './yearli_expenses.controller';
import { YearliExpensesService } from './yearli_expenses.service';

@Module({
  controllers: [YearliExpensesController],
  providers: [YearliExpensesService]
})
export class YearliExpensesModule {}
