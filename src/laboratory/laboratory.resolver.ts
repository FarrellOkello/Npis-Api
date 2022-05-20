import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LaboratoryService } from './laboratory.service';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';
import { LaboratoryDto } from './dto/laboratory.dto';

@Resolver(() => LaboratoryDto)
export class LaboratoryResolver {
  constructor(private readonly laboratoryService: LaboratoryService) { }

  @Mutation(() => LaboratoryDto)
  createLaboratory(@Args('data') data: CreateLaboratoryInput) {
    return this.laboratoryService.create(data);
  }

  @Query(() => [LaboratoryDto], { name: 'laboratory' })
  findAll() {
    return this.laboratoryService.findAll();
  }

  // @Query(() => LaboratoryDto, { name: 'laboratory' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.laboratoryService.findOne(id);
  // }

  // @Mutation(() => LaboratoryDto)
  // updateLaboratory(@Args('updateLaboratoryInput') updateLaboratoryInput: UpdateLaboratoryInput) {
  //   return this.laboratoryService.update(updateLaboratoryInput.id, updateLaboratoryInput);
  // }

  // @Mutation(() => LaboratoryDto)
  // removeLaboratory(@Args('id', { type: () => Int }) id: number) {
  //   return this.laboratoryService.remove(id);
  // }
}
