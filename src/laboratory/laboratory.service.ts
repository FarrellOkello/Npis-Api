import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';
import { LaboratoryEntity } from './entities/laboratory.entity';

@Injectable()
export class LaboratoryService {
  private Table_Name: string;

  constructor(
    @InjectRepository(LaboratoryEntity)
    private readonly laboratoryRepository: Repository<LaboratoryEntity>,
    // private readonly dataCache: DataCache,
    // private readonly connection: Connection
  ) {
    this.Table_Name = this.laboratoryRepository.metadata.tableName;
  }


  async create(data: CreateLaboratoryInput): Promise<LaboratoryEntity> {
    let newRecord;
    newRecord = await this.laboratoryRepository.save({ ...data });
    const newDataToCache: string[] = await this.fetchAndStringfy();
    // await this.dataCache.setData(config.Resources.CgBotGouExpenditureLimits, newDataToCache);

    // if (newRecord) {
    //   createAudit(user, this.Table_Name, "create", "", newRecord);
    // }

    return newRecord;
  }

  findAll() {
    return `This action returns all laboratory`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} laboratory`;
  // }

  // update(id: number, updateLaboratoryInput: UpdateLaboratoryInput) {
  //   return `This action updates a #${id} laboratory`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} laboratory`;
  // }


  async fetchAndStringfy(): Promise<string[]> {
    const dbRecords: LaboratoryEntity[] = await this.laboratoryRepository.find();
    return dbRecords.map((entity) => JSON.stringify(entity));
  }
}
