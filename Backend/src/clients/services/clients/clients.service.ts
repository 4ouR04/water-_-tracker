import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/typeorm/entities/client';
import { CreateClientParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}
  createClient(clientDetails: CreateClientParams) {
    const newClient = this.clientRepository.create({
      ...clientDetails,
      createdAt: new Date(),
    });
    return this.clientRepository.save(newClient);
  }
    findClients() {
     return this.clientRepository.find()
    }
    updateClient() {
        
    }
}
