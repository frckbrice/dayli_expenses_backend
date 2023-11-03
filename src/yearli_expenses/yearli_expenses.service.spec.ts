import { Test, TestingModule } from '@nestjs/testing';
import { YearliExpensesService } from './yearli_expenses.service';

describe('YearliExpensesService', () => {
  let service: YearliExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YearliExpensesService],
    }).compile();

    service = module.get<YearliExpensesService>(YearliExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
