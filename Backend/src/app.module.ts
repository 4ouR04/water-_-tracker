import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BillsModule } from './bills/bills.module';
import { ClientsModule } from './clients/clients.module';
import { SharedModule } from './shared/shared.module';
import config from './shared/config/keys'
@Module({
  imports: [
    AuthModule,
    BillsModule,
    ClientsModule,
    MongooseModule.forRoot(config.URI),
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
