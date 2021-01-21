import { Module } from '@nestjs/common';
import { Try2GamesController } from './try2-games.controller';
import { Try2GamesService } from './try2-games.service';

@Module({
  controllers: [Try2GamesController],
  providers: [Try2GamesService]
})
export class Try2GamesModule {}
