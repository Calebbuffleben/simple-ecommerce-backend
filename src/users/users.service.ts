import { BadRequestException } from '@nestjs/common';

export class UsersService {
  async createUser(createUserDTO: CreateUserDTO) {
    if (createUserDTO.email && isValidCpf(createUserDTO.cpf)) {
      throw new BadRequestException('The users arleady exists');
    }

    const user = new this.userModel(createUserDTO);
    await user.save();
    return user;
  }
}