import { Injectable } from '@nestjs/common';

@Injectable()
export class Try1Service {
  getWarmWelcome() : string {
    return "Warm Welcome To NestJS"
  }
}
