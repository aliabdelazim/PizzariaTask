import { Inject, Injectable } from '@nestjs/common';
import { DoughService } from '../dough/dough.service';
import { ToppingsService } from '../toppings/toppings.service';
import { OvenService } from '../oven/oven.service';
import { ServeService } from '../serve/serve.service';
import { IOrder } from 'src/restaurant/models/IOrder';

@Injectable()
export class PizzaService {
    @Inject(DoughService)
    private readonly doughService: DoughService;

    @Inject(ToppingsService)
    private readonly toppingsService: ToppingsService;

    @Inject(OvenService)
    private readonly ovenService: OvenService;

    @Inject(ServeService)
    private readonly serveService: ServeService;

    async prepare(order: IOrder): Promise<void> {
        await this.doughService.prepare(order);
        await this.toppingsService.prepare(order);
        await this.ovenService.cook(order);
        await this.serveService.serve(order);
    }
}
