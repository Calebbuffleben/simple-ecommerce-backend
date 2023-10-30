import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  async addUser(@Body() user:User) {
    addUser(user);

    return { message: 'User Added'}
  }
}
