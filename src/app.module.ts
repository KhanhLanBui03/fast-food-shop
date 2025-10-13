import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { Dialect, Sequelize } from 'sequelize';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { sequelizeConfig } from './config/sequelize.config';

@Module({
  imports :[
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService):SequelizeModuleOptions=> sequelizeConfig(config)
    })
  ]
})
export class AppModule {}
