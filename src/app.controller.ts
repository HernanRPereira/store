import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('products')
  getProducts(@Query('limit') limit: number = 0, @Query('offset') offset: number = 0, @Query('brand') brand: string) {
    return `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return `im product filtro`
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('categoryId') categoryId: string) {
    return `product ${productId} and category ${categoryId}`
  }
}
