import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { CET } from './entities/crud.entity';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  controllers: [CrudController],
  providers: [CrudService],
  imports: [SequelizeModule.forFeature([CET])]
})
export class CrudModule { }
