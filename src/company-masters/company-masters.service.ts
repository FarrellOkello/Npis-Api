import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import config from "src/Config";
import { CreateCompanyMasterInput } from './dto/create-company-master.input';
import { UpdateCompanyMasterInput } from './dto/update-company-master.input';
import { CompanyMasterEntity } from './entities/company-master.entity';
import { DataCache } from 'src/Helpers/data.cache';

@Injectable()
export class CompanyMastersService {

  constructor(
    @InjectRepository(CompanyMasterEntity)
    private readonly companyMasterRepository: Repository<CompanyMasterEntity>,
    private readonly dataCache: DataCache
  ) {
  }

  async create(data: CreateCompanyMasterInput): Promise<CompanyMasterEntity> {
    let newRecord;
    newRecord = await this.companyMasterRepository.save({ ...data });
    const newDataToCache: string[] = await this.fetchAndStringfy();
    await this.dataCache.setData(config.Resources.CompanyMasters, newDataToCache);
    return newRecord;
  }

  async findAll() {
    let stringRecords: string[];
    let cached: string[] = await this.dataCache.getData(config.Resources.CompanyMasters);

    if (cached) {
      stringRecords = cached;
    } else {
      stringRecords = await this.fetchAndStringfy();
      await this.dataCache.setData(config.Resources.CompanyMasters, stringRecords);
    }

    return stringRecords.map((record) => JSON.parse(record));
  }

  async findOne(id: number) {
    const records = await this.findAll();
    return records.find((item) => item["ID"] === id);
  }

  async update(id: number, data: UpdateCompanyMasterInput) {
    let existingRecord = await this.companyMasterRepository.findOne(id);
    const updated = await this.companyMasterRepository.save({
      ...existingRecord,
      ...data,
    });
    const newDataToCache: string[] = await this.fetchAndStringfy();
    await this.dataCache.setData(config.Resources.CompanyMasters, newDataToCache);
    return updated;
  }

  async remove(id: number) {
    let existingRecord = await this.companyMasterRepository.findOne(id);
    const deleted = await this.companyMasterRepository.delete(id);
    const newDataToCache: string[] = await this.fetchAndStringfy();
    await this.dataCache.setData(config.Resources.CompanyMasters, newDataToCache);
    return existingRecord;
  }

  async fetchAndStringfy(): Promise<string[]> {
    const dbRecords: CompanyMasterEntity[] = await this.companyMasterRepository.find();
    return dbRecords.map((entity) => JSON.stringify(entity));
  }
}
