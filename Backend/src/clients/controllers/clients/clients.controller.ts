import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClientDto } from 'src/clients/dtos/createClientDto';
import { ClientsService } from 'src/clients/services/clients/clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}
  @Get()
  async getClients() {
    const clients = await this.clientsService.findClients();
    return clients;
  }

  @Post()
  createClient(@Body() createClientDto: CreateClientDto) {
   return this.clientsService.createClient(createClientDto);
  }
}
