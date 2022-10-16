import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/typeorm/entities/client';
import { ClientsController } from './controllers/clients/clients.controller';
import { ClientsService } from './services/clients/clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
