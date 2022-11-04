import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      statusCode: 200,
      message: 'success',
    };
  }
  @Post()
  postUsers() {
    return {
      statusCode: 200,
      message: 'success',
    };
  }
  @Put()
  putUsers() {
    return {
      statusCode: 200,
      message: 'success',
    };
  }
  @Delete()
  deleteUsers() {
    return {
      statusCode: 200,
      message: 'success',
    };
  }
}
