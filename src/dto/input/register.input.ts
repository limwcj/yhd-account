import { LoginType, Sex } from '.prisma/client';
import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType('RegisterInput')
export class RegisterInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(64)
  @MinLength(1)
  identifier: string;

  @Field({ nullable: true, defaultValue: LoginType.NICKNAME })
  @IsEnum(LoginType)
  @IsOptional()
  loginType: LoginType;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(1)
  nickname?: string;

  @Field()
  @MaxLength(32)
  @MinLength(6)
  password: string;

  @Field({ nullable: true, defaultValue: Sex.MALE })
  @IsEnum(Sex)
  @IsOptional()
  sex: Sex;

  @Field({ nullable: true })
  headimg?: string;

  ip?: string;
}
