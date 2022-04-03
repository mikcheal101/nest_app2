import { Controller, Get, Param } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  public all() {
    return this.productService.all();
  }

  @Get(':id')
  public fetchById(@Param('id') id: number) {
    return this.productService.fetchOne(id);
  }

  @EventPattern('hello')
  public async helloAction(param: string) {
    console.log(`[+] Param: ${param}`);
  }
}
