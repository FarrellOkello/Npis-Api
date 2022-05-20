import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoryResolver } from './laboratory.resolver';
import { LaboratoryService } from './laboratory.service';

describe('LaboratoryResolver', () => {
  let resolver: LaboratoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratoryResolver, LaboratoryService],
    }).compile();

    resolver = module.get<LaboratoryResolver>(LaboratoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
