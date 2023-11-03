import { Test, TestingModule } from '@nestjs/testing';
import { WeekliExpensesService } from './weekli_expenses.service';

describe('WeekliExpensesService', () => {
  let service: WeekliExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeekliExpensesService],
    }).compile();

    service = module.get<WeekliExpensesService>(WeekliExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
