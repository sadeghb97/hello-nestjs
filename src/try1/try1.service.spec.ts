import { Test, TestingModule } from '@nestjs/testing';
import { Try1Service } from './try1.service';

describe('Try1Service', () => {
  let service: Try1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Try1Service],
    }).compile();

    service = module.get<Try1Service>(Try1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
