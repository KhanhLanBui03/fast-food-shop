import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();
  const logger = new Logger('bootstrap');
  const port = configService.get<string>('PORT') || 5000;
  logger.log(`Application running on port: ${port}`);
  await app.listen(port);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
