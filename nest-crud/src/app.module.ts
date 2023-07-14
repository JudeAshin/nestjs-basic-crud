import {   Module, NestModule  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import config from './configure_DB/config_DB';
import { SequelizeModule } from '@nestjs/sequelize/dist';
//import { LoggerMiddleware } from './logger.middleware';
import { CrudController } from './crud/crud.controller';
// import { logger } from './logger.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SequelizeModule.forRoot(config), CrudModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
 export class AppModule implements NestModule {
  configure() {


    // consumer
    // .apply(LoggerMiddleware)

    //Functional middleware
    // consumer
    //   .apply(logger)
    //   .forRoutes(CrudController);


    //Excluding routes
    //  .exclude(
    //   { path: 'apple', method: RequestMethod.GET },
    //   //{ path: 'apple', method: RequestMethod.POST },
     // 'apple/(.*)',
     


    //Middleware consumer
     //.forRoutes(CrudController)


    //Routes WildCard
    // .forRoutes({ path: '*', method: RequestMethod.ALL });
    
  }
}
