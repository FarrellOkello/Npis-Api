import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyMastersService } from './company-masters.service';
import { CreateCompanyMasterInput } from './dto/create-company-master.input';
import { UpdateCompanyMasterInput } from './dto/update-company-master.input';
import { CompanyMasterDto } from './dto/company-master.dto';

@Resolver(() => CompanyMasterDto)
export class CompanyMastersResolver {
  constructor(
    private readonly companyMastersService: CompanyMastersService
  ) { }

  @Mutation(() => CompanyMasterDto, { nullable: true })
  createCompanyMaster(@Args('data') data: CreateCompanyMasterInput) {
    return this.companyMastersService.create(data);
  }

  @Query(() => [CompanyMasterDto], { nullable: true })
  companyMasters() {
    return this.companyMastersService.findAll();
  }

  @Query(() => CompanyMasterDto, { nullable: true })
  companyMaster(@Args('id') id: number) {
    return this.companyMastersService.findOne(id);
  }

  @Mutation(() => CompanyMasterDto, { nullable: true })
  updateCompanyMaster(
    @Args("id") id: number, @Args('data') data: UpdateCompanyMasterInput) {
    return this.companyMastersService.update(id, data);
  }

  @Mutation(() => CompanyMasterDto, { nullable: true })
  removeCompanyMaster(@Args('id') id: number) {
    return this.companyMastersService.remove(id);
  }
}
