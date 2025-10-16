import { Module } from '@nestjs/common';
import { Dialect, Sequelize } from 'sequelize';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { sequelizeConfig } from './config/sequelize.config';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports :[
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService):SequelizeModuleOptions=> sequelizeConfig(config)
    }),
    UserModule,
    ProductModule,
    CategoryModule
  ]
})
export class AppModule {}
