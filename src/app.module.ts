import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [PlacesModule],
  controllers: [AppController],
})
export class AppModule {}
