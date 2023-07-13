// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...');
//     next();
//     console.log('Response....')
//     //res.send('req invalid')
    
//   }
// }

//Functional Middleware

// export function logger(req: Request, res: Response, next: NextFunction) {
//   console.log(`Request...`);
//   next();
// };