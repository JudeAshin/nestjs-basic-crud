import { Injectable } from '@nestjs/common';
import { cruddto } from './dto/crud.dto';
import { CET } from './entities/crud.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CrudService {

  constructor(@InjectModel(CET) private crudModel: typeof CET) { }

  //post
  async create(createCrudDto: cruddto): Promise<CET> {
    return this.crudModel.create(createCrudDto);
  }
  //get

  async getallcrud(): Promise<CET[]> {
    return this.crudModel.findAll();
  }
  //get(:id)

  async findOne(id: number): Promise<CET> {
    return this.crudModel.findByPk(id);
  }
  //patch
  async update(id: number, apple: cruddto): Promise<Array<CET>> {
    const Dood = await this.crudModel.update(apple, { where: { id }, returning: true });
    return Dood[1]
  }
  //delete
  async delete(id: number): Promise<void> {
    const deletethis = await this.crudModel.findByPk(id);
    deletethis.isDeleted = true;
    deletethis.deletedAt = new Date();
    deletethis.save();
  }

}