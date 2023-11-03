import { Test, TestingModule } from '@nestjs/testing';
import { DayliExpensesService } from './dayli_expenses.service';

describe('DayliExpensesService', () => {
  let service: DayliExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayliExpensesService],
    }).compile();

    service = module.get<DayliExpensesService>(DayliExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
