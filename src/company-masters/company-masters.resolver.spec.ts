import { Test, TestingModule } from '@nestjs/testing';
import { CompanyMastersResolver } from './company-masters.resolver';
import { CompanyMastersService } from './company-masters.service';

describe('CompanyMastersResolver', () => {
  let resolver: CompanyMastersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyMastersResolver, CompanyMastersService],
    }).compile();

    resolver = module.get<CompanyMastersResolver>(CompanyMastersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
