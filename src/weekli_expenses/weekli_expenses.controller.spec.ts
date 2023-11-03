import { Test, TestingModule } from '@nestjs/testing';
import { WeekliExpensesController } from './weekli_expenses.controller';

describe('WeekliExpensesController', () => {
  let controller: WeekliExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeekliExpensesController],
    }).compile();

    controller = module.get<WeekliExpensesController>(WeekliExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
