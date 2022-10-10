import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BillsModule } from './bills/bills.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [AuthModule, BillsModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
