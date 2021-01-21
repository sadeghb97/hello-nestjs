import { Test, TestingModule } from '@nestjs/testing';
import { Try1Controller } from './try1.controller';

describe('Try1Controller', () => {
  let controller: Try1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Try1Controller],
    }).compile();

    controller = module.get<Try1Controller>(Try1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
