import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, HttpStatus, ForbiddenException, BadRequestException } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CET } from './entities/crud.entity';
import { cruddto } from './dto/crud.dto';

@Controller("apple")
export class CrudController {
  constructor(private crudService: CrudService) { }

  @Post()
  async createCrud(@Body() CrudDto: cruddto): Promise<CET> {
    return this.crudService.create(CrudDto)
  }



  @Get()
  async getallcrud(): Promise<CET[]> {
    // 400 Error
    // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
    // Custom Exception
    // throw new ForbiddenException();
    return this.crudService.getallcrud();
  }

  //Throwing Expression

  @Get(':id')
  async getById(@Param('id') id: number): Promise<CET> {

    
    // throw new HttpException('Forbidden',HttpStatus.FORBIDDEN)
    return this.crudService.findOne(id);
    
  }

  @Put(':id')
  async updatecrud(@Param('id') id: number, @Body() updateCrudDto: cruddto) {
    
    return this.crudService.update(id, updateCrudDto);
  }

  // @Patch(':id')
  // async updatecrud(@Param('id') id:number,@Body() updateCrudDto: cruddto) {
    
  //   return this.crudService.update(id, updateCrudDto);
  // }
 
  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<void> {
    return this.crudService.delete(id);
  }
}