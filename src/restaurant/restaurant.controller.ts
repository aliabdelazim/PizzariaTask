import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { RestaurantsService } from './restaurant.service';
import { OrdersDTO } from './dtos/orders.dto';

@Controller('restaurant')
export class RestaurantsController {
  @Inject(RestaurantsService)
  private readonly restaurantsService: RestaurantsService;



  @Post()
  async serveOrders(@Body() orders: OrdersDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Orders served successfully',
      data: await this.restaurantsService.handleOrders(orders.orders),
    };
  }

}
