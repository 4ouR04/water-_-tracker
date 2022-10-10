import { Controller, Get } from '@nestjs/common';

@Controller('bills')
export class BillsController {
    constructor() {
    }
    @Get()
    getAllBills() {
        
    }
}
