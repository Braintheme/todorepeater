import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from '@modules/auth/auth.controller';
import { AuthService } from '@modules/auth/auth.service';
import { JwtStrategy } from '@common/strategies/jwt.strategy';
import { UserEntity } from '@modules/user/user.entity';
import { UserService } from '@modules/user/user.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get<string>('JWT_EXPIRE') || '2d',
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy],
})
export class AuthModule {}
