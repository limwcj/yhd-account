import { Field, InputType } from '@nestjs/graphql';
import { LoginType } from '@prisma/client';
import { IsEnum, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType('LoginInput')
export class LoginInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(64)
  @MinLength(1)
  identifier: string;

  @Field()
  @IsEnum(LoginType)
  loginType: LoginType;

  @Field()
  @MaxLength(32)
  @MinLength(6)
  password: string;

  ip?: string;
}
