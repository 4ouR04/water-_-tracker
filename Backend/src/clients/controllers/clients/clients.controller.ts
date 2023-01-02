import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateClientDto } from 'src/clients/dtos/createClient.dto';
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
  createClient(@Body() clientInformation: CreateClientDto) {
   return this.clientsService.createClient(clientInformation);
  }
    @Patch()
    updateClientById(@Param('id ', ParseIntPipe) id: number) {
        return this.clientsService.updateClient()
    }
}
