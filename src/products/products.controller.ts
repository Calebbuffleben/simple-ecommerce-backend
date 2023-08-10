import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
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
  async getProducts() {
    const products = getProducts();

    return products;
  }

  @Get(':id')
  async getProductById(@Param('id') id:string) {
    const product = getProductById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { product };
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() product: Partial<Product>,
  ) {
    const { title, description } = product;
    updateProduct(id, title, description);
    return { message: 'Product updated' };
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    deleteProduct(id);

    return { message: 'Product deleted' };
  }
}
