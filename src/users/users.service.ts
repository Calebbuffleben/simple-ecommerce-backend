import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isValidCpf } from 'src/helpers/validate-cpf.helper';
import { User } from './schemas/users.schema';

export class UsersService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<User>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO) {
    if (
      this.findUserByEmail(createUserDTO.email) &&
      !isValidCpf(createUserDTO.cpf)
    ) {
      throw new BadRequestException('The users dont could be created');
    }

    const user = new this.userModel(createUserDTO);

    await user.save();

    return user;
  }

  async findUserByEmail(email) {
    this.userModel.findOne({ email });
  }
}
