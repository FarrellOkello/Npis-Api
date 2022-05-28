import { Test, TestingModule } from '@nestjs/testing';
import { CompanyMastersService } from './company-masters.service';

describe('CompanyMastersService', () => {
  let service: CompanyMastersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyMastersService],
    }).compile();

    service = module.get<CompanyMastersService>(CompanyMastersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
