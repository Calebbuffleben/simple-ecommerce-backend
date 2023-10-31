import { BadRequestException } from '@nestjs/common';
import { isValidCpf } from 'src/helpers/validate-cpf.helper';

export class UsersService {
  async createUser(createUserDTO: CreateUserDTO) {
    if (
      this.findUserByEmail(createUserDTO.email) &&
      !isValidCpf(createUserDTO.cpf)
    ) {
      throw new BadRequestException('The users arleady exists');
    }

    const user = new this.userModel(createUserDTO);
    await user.save();
    return user;
  }

  async findUserByEmail(email) {
    this.userModel.findOne({ email });
  }
}
