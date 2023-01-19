import { Injectable } from '@nestjs/common';
import { IOrder } from 'src/restaurant/models/IOrder';

@Injectable()
export class OvenService {
  
    private currentCooking = 0;
    private maxCooking = 1;
    private cookingDurationPerOven = 10000;
  
    async cook(order: IOrder): Promise<void> {
      while (this.currentCooking >= this.maxCooking) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      this.currentCooking++;
      console.log(`Start cooking order: ${order.id} at:`, new Date().toISOString());
      await new Promise((resolve) => setTimeout(resolve, this.cookingDurationPerOven));
      console.log(`Finished cooking order: ${order.id} at:`, new Date().toISOString());
      this.currentCooking--;
    }
}
