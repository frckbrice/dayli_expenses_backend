import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { DayliExpensesModule } from './dayli_expenses/dayli_expenses.module';
import { WeekliExpensesModule } from './weekli_expenses/weekli_expenses.module';
import { MonthliExpensesModule } from './monthli_expenses/monthli_expenses.module';
import { YearliExpensesModule } from './yearli_expenses/yearli_expenses.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ExpensesCategoryModule } from './expenses-category/expenses-category.module';

@Module({
  imports: [
    ExpensesModule,
    DayliExpensesModule,
    WeekliExpensesModule,
    MonthliExpensesModule,
    YearliExpensesModule,
    UserModule,
    AuthModule,
    ExpensesCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
