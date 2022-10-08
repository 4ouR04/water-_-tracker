import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getClients (): string {
    return 'Hello World!';
  }
}
