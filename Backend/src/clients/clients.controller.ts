import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getClients(): string {
    return this.appService.getClients();
  }

  @Get(':id')
  getClient(@Param('id') clientId: string) {}
}
