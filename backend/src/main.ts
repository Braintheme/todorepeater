import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '@common/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  const port = parseInt(process.env.API_PORT ?? '4000', 10);
  await app.listen(port);
}
bootstrap();
