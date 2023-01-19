import { Injectable } from '@nestjs/common';
import { IOrder } from 'src/restaurant/models/IOrder';

@Injectable()
export class DoughService {
    private currentPreparing = 0;
    private maxPreparing = 2;
    private preparingDurationPerChef = 7000;

    async prepare(order: IOrder): Promise<void> {
      while (this.currentPreparing >= this.maxPreparing) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      this.currentPreparing++;
      console.log(`Start preparing order: ${order.id} dough at:`, new Date().toISOString());
      await new Promise((resolve) => setTimeout(resolve, this.preparingDurationPerChef));
      console.log(`Finished preparing order: ${order.id} dough at:`, new Date().toISOString());
      this.currentPreparing--;
    }
}
