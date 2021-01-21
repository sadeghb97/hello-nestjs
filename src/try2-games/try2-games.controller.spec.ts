import { Test, TestingModule } from '@nestjs/testing';
import { Try2GamesController } from './try2-games.controller';

describe('Try2GamesController', () => {
  let controller: Try2GamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Try2GamesController],
    }).compile();

    controller = module.get<Try2GamesController>(Try2GamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
