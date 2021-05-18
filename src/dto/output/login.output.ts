import { LoginType, Sex } from '.prisma/client';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginOutput {
  @Field()
  id: string;

  @Field()
  identifier: string;

  @Field()
  loginType: LoginType;

  @Field()
  nickname: string;

  @Field()
  sex: Sex;

  @Field({ nullable: true })
  headimg?: string;

  @Field({ nullable: true })
  regTime?: Date;
}
