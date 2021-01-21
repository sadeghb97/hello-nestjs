import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Try1Module } from './try1/try1.module';

@Module({
  imports: [Try1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
