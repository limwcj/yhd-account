import { Sex } from '.prisma/client';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccountOutput {
  @Field()
  id: string;

  @Field()
  nickname: string;

  @Field()
  sex: Sex;

  @Field({ nullable: true })
  headimg?: string;

  @Field({ nullable: true })
  regTime?: Date;
}
