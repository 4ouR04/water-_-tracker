import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/shared/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(@InjectModel('user') private readonly userModel: Model<IUser>) { }
    
    async signup(user: IUser) {
        
    }
    async login(email: string): Promise<IUser> {
        return 
    }
}