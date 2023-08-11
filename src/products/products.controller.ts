import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/products.schema';

@Controller('api/form')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.createProduct(createProductDto);
    return { message: 'Product added', product };
  }

  @Get()
  async getProducts(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<{ products: Product[] }> {
    const products = await this.productsService.getProducts(page, limit);

    return { products };
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const product = await this.productsService.getProductById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { product };
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto,
  ): Promise<{ message: string; product: Product }> {
    const product = await this.productsService.updateProduct(
      id,
      createProductDto,
    );
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { message: 'Product updated', product };
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<{ message: string }> {
    const deleted = await this.productsService.deleteProduct(id);
    if (!deleted) {
      throw new NotFoundException('Product not found');
    }

    return { message: 'Product deleted' };
  }
}
