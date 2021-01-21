import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Try1Module } from './try1/try1.module';
import { Try2GamesModule } from './try2-games/try2-games.module';

@Module({
  imports: [Try1Module, Try2GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
