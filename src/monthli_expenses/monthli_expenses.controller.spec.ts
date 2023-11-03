import { Test, TestingModule } from '@nestjs/testing';
import { MonthliExpensesController } from './monthli_expenses.controller';

describe('MonthliExpensesController', () => {
  let controller: MonthliExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthliExpensesController],
    }).compile();

    controller = module.get<MonthliExpensesController>(MonthliExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
