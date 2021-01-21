import { Test, TestingModule } from '@nestjs/testing';
import { Try2GamesService } from './try2-games.service';

describe('Try2GamesService', () => {
  let service: Try2GamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Try2GamesService],
    }).compile();

    service = module.get<Try2GamesService>(Try2GamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
