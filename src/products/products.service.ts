import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './create-product.dto';
import { Product } from './schemas/products.schema';

export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = new this.productModel(createProductDto);

    await product.save();
    return product;
  }

  async getProducts(page = 1, limit = 10): Promise<Product[]> {
    const skip = (page - 1) * limit;

    return this.productModel.find().skip(skip).limit(limit).exec();
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async updateProduct(
    id: string,
    createProductDto: CreateProductDto,
  ): Promise<Product | null> {
    return this.productModel
      .findByIdAndUpdate(id, createProductDto, { new: true })
      .exec();
  }

  async deleteProduct(id: string): Promise<boolean> {
    const result = await this.productModel.findByIdAndDelete(id).exec();

    return !!result;
  }
}
