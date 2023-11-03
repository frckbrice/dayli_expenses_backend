import { Test, TestingModule } from '@nestjs/testing';
import { YearliExpensesController } from './yearli_expenses.controller';

describe('YearliExpensesController', () => {
  let controller: YearliExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YearliExpensesController],
    }).compile();

    controller = module.get<YearliExpensesController>(YearliExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
