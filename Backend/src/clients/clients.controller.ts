import { Controller, Get, Param } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
  constructor() {}
  @Get()
  getClients() {
  }

  @Get(':id')
  getClient(@Param('id') clientId: string) {}
}
