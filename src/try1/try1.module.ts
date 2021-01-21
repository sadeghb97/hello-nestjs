import { Module } from '@nestjs/common';
import { Try1Controller } from './try1.controller';
import { Try1Service } from './try1.service';

@Module({
  controllers: [Try1Controller],
  providers: [Try1Service]
})
export class Try1Module {}
