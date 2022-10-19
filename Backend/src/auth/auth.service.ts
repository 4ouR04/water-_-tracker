import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/User.dto';
import { ClientsService } from 'src/clients/services/clients/clients.service';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => ClientsService))
    private clientService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const client = await this.clientService.findClient(email);

    if (client && client.password === password) {
      const { password, ...rest } = client;
      return rest;
    }
    return null;
  }

  async login(user: UserDTO) {
    const payload = { ...user };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
