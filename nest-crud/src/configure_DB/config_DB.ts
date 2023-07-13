import { SequelizeModuleOptions } from "@nestjs/sequelize/dist"

const config: SequelizeModuleOptions = {

    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: 'root',
    password: '',
    database: "apple",
    autoLoadModels: true,
    synchronize: true,
    sync: { alter: true }
}

export default config; 