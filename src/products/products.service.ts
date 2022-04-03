import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productsModel,
  ) {}

  public async all() {
    return this.productsModel.find().exec();
  }

  public async fetchOne(id: number) {
    return this.productsModel.findOne(id);
  }
}
