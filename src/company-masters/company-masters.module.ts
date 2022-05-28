import { CacheModule, Module } from '@nestjs/common';
import { CompanyMastersService } from './company-masters.service';
import { CompanyMastersResolver } from './company-masters.resolver';
import { CompanyMasterEntity } from './entities/company-master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataCache } from 'src/Helpers/data.cache';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompanyMasterEntity
    ]),
    CacheModule.register(),]
  , providers: [CompanyMastersResolver,
    CompanyMastersService,
    DataCache],
})
export class CompanyMastersModule { }
