import { Module } from '@nestjs/common';
import { ExpansesModule } from './application/expanses/expanses.module';

@Module({
  imports: [ExpansesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
