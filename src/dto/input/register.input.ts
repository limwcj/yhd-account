import { Sex } from '.prisma/client';
import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType('RegisterInput')
export class RegisterInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(20)
  nickname: string;

  @Field()
  @MaxLength(32)
  @MinLength(6)
  password: string;

  @Field({ nullable: true, defaultValue: Sex.MALE })
  @IsEnum(Sex)
  @IsOptional()
  sex?: Sex;

  @Field({ nullable: true })
  headimg?: string;
}
