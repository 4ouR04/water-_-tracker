import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BillsModule } from './bills/bills.module';
import { ClientsModule } from './clients/clients.module';
import config from './config/keys'
@Module({
  imports: [
    AuthModule,
    BillsModule,
    ClientsModule,
    MongooseModule.forRoot(config.URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
