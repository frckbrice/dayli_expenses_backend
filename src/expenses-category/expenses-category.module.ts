import { Module } from '@nestjs/common';
import { ExpensesCategoryService } from './expenses-category.service';
import { ExpensesCategoryController } from './expenses-category.controller';

@Module({
  providers: [ExpensesCategoryService],
  controllers: [ExpensesCategoryController]
})
export class ExpensesCategoryModule {}
