import { Controller, Get } from '@nestjs/common';
import { Try1Service } from './try1.service';

@Controller('try1')
export class Try1Controller {
  constructor(private readonly appService: Try1Service) {}

  @Get()
  getWarmWelcome(): string {
    return this.appService.getWarmWelcome()
  }
}
