import { Module } from '@nestjs/common';
import { BillsController } from './bills.controller';

@Module({
  controllers: [BillsController]
})
export class BillsModule {}
