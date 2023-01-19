import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsService } from './restaurant.service';
import { RestaurantsController } from './restaurant.controller';
import { ReportsEntity } from './entities/report.entity';
import { DoughService } from './services/dough/dough.service';
import { OvenService } from './services/oven/oven.service';
import { PizzaService } from './services/pizza/pizza.service';
import { ServeService } from './services/serve/serve.service';
import { ToppingsService } from './services/toppings/toppings.service';


@Module({
  imports: [TypeOrmModule.forFeature([ReportsEntity])],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, DoughService, OvenService, PizzaService, ServeService, ToppingsService],
})
export class RestaurantsModule {}
