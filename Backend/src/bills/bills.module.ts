import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillSchema } from 'src/shared/schemas/bill.schema';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'bill', schema: BillSchema}])],
  controllers: [BillsController],
  providers: [BillsService]
})
export class BillsModule {}
