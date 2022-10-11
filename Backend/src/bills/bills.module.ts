import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillSchema } from 'src/schemas/bill.schema';
import { BillsController } from './bills.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'bill', schema: BillSchema}])],
  controllers: [BillsController]
})
export class BillsModule {}
