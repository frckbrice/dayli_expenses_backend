import { Test, TestingModule } from '@nestjs/testing';
import { MonthliExpensesService } from './monthli_expenses.service';

describe('MonthliExpensesService', () => {
  let service: MonthliExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonthliExpensesService],
    }).compile();

    service = module.get<MonthliExpensesService>(MonthliExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
