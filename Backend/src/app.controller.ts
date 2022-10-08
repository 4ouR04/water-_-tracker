import { Controller, Get, Param } from '@nestjs/common';
import { identity } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getClients(): string {
    return this.appService.getClients();
  }

  @Get(':id')
  getClient(@Param('id') clientId:string) {
    
  }
}
