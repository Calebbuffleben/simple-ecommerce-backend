import { BadRequestException } from '@nestjs/common';

export class UsersService {
  async createUser(createUserDTO: CreateUserDTO) {
    if (createUserDTO.email) {
      throw new BadRequestException('The users arleady exists');
    }
  }
}