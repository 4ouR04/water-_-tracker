import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { AuthController } from './auth.controller';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'user',schema: UserSchema}])],
  controllers: [AuthController],
})
export class AuthModule {}
