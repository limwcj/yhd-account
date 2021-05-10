import { Controller } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountController } from '../../controller/account/account.controller';
import { RegisterInput } from '../../dto/input/register.input';
import { AccountOutput } from '../../dto/output/account.output';

@Resolver((of) => AccountOutput)
@Controller()
export class AccountResolver {
  constructor(private readonly accountController: AccountController) {}

  @Mutation((returns) => AccountOutput)
  async register(@Context() ctx: any, @Args('RegisterInput') input: RegisterInput) {
    input.ip = ctx.req.ip;
    const { createdUserProfile, createdRegisterLog } = await this.accountController.register(input);
    return { ...createdUserProfile, regTime: createdRegisterLog.createdAt };
  }

  @Query((returns) => AccountOutput)
  accounts() {
    return {};
  }
}
