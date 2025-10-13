import { ConfigService } from "@nestjs/config"
import { SequelizeModuleOptions } from "@nestjs/sequelize"
import { Dialect } from "sequelize"

export const sequelizeConfig =(config:ConfigService):SequelizeModuleOptions=>({
    dialect: config.get<Dialect>('DB_DIALECT') ?? 'mysql',
            host: config.get<string>('DB_HOST'),
            port: config.get<number>('DB_PORT')? Number(config.get<number>('DB_PORT')) : 3306,
            username: config.get<string>('DB_USER'),
            password: config.get<string>('DB_PASS'),
            database: config.get<string>('DB_NAME'),
})