import { Controller } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountController } from '../../controller/account/account.controller';
import { RegisterInput } from '../../dto/input/register.input';
import { AccountOutput } from '../../dto/output/account.output';

@Resolver((of) => AccountOutput)
@Controller()
export class AccountResolver {
  constructor(private readonly accountController: AccountController) {}

  @Mutation((returns) => AccountOutput)
  async register(@Args('RegisterInput') input: RegisterInput) {
    await this.accountController.register(input);
    return { id: '', nickname: 'test', sex: 'male' };
  }

  @Query((returns) => AccountOutput)
  accounts() {
    return {};
  }
}
