import { Controller, Get } from '@nestjs/common';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { AppService } from './app.service';

/* @SkipThrottle() //skip throttle for whole controller */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @SkipThrottle()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('users')
  getUsers(){
    return ['ram','shyam','hari']
  }

  @Throttle(5,20)
  @Get('products')
  getProducts(){
    return ['mobile','laptop','headphone']
  }
}
