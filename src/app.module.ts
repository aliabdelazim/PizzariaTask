import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurant/restaurant.module';


@Module({
  imports: [TypeOrmModule.forRoot(), RestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
