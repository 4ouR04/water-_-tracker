import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client} from './typeorm/entities/client';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'Water_Tracker',
    entities: [Client],
    synchronize: true
  }), ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
