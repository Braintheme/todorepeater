import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { entities } from '@common/common/entities';

export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'mysql',
  url: configService.get<string>('DATABASE_URL'),
  entities: entities,
  synchronize: true,
  dropSchema: false,
});
