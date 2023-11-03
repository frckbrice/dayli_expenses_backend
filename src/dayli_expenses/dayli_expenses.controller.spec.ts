import { Test, TestingModule } from '@nestjs/testing';
import { DayliExpensesController } from './dayli_expenses.controller';

describe('DayliExpensesController', () => {
  let controller: DayliExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DayliExpensesController],
    }).compile();

    controller = module.get<DayliExpensesController>(DayliExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
