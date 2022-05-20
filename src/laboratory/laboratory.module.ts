import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryResolver } from './laboratory.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryEntity } from './entities/laboratory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LaboratoryEntity])],
  providers: [LaboratoryResolver, LaboratoryService]
})
export class LaboratoryModule { }
