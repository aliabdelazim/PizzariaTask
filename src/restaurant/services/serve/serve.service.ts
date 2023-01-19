import { Injectable } from '@nestjs/common';
import { IOrder } from 'src/restaurant/models/IOrder';

@Injectable()
export class ServeService {

    private currentServing = 0;
    private maxServing = 2;
    private servingDurationPerWaiter = 5000;
  
    async serve(order: IOrder): Promise<void> {
      while (this.currentServing >= this.maxServing) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      this.currentServing++;
      console.log(`Start serve order: ${order.id} at:`, new Date().toISOString());
      await new Promise((resolve) => setTimeout(resolve, this.servingDurationPerWaiter));
      console.log(`Finished serve order: ${order.id} at:`, new Date().toISOString());
      this.currentServing--;
    }
}
