import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'user',schema: UserSchema}])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
