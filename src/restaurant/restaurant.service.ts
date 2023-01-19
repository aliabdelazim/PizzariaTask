import { Inject, Injectable } from '@nestjs/common';

import { PizzaService } from './services/pizza/pizza.service';
import { IOrder } from './models/IOrder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportsEntity } from './entities/report.entity';
import { IReport } from './models/IReport';

@Injectable()
export class RestaurantsService {
  @Inject(PizzaService)
  private readonly pizzaService: PizzaService;
  constructor(
    @InjectRepository(ReportsEntity)
    private reportsRepository: Repository<ReportsEntity>,
  ) {

  }

  async handleOrders(orders: IOrder[]): Promise<void> {
    const preparePromises = orders.map(order => this.pizzaService.prepare(order));
    let report = {
      startPrepTime: new Date().toISOString(),
      endPrepTime: '',
      numberOfOrder: orders.length
    }
    console.log('Start serving pizza at:', new Date().toISOString());
    await Promise.all(preparePromises).then(
      (res)=> {
        console.log('Finished serving all pizzas at:', new Date().toISOString());
        report.endPrepTime = new Date().toISOString();
        this.createReport(report);
      },
      (err)=> {
        console.log('Failed serving pizza at:', new Date().toISOString());
      });
  }

  async createReport(data: IReport) {
    const report = this.reportsRepository.create(data);
    await this.reportsRepository.save(data);
    return report;
  }
}