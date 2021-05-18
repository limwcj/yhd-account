import { Controller } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountController } from '../../controller/account/account.controller';
import { LoginInput } from '../../dto/input/login.input';
import { RegisterInput } from '../../dto/input/register.input';
import { LoginOutput } from '../../dto/output/login.output';

@Resolver((of) => LoginOutput)
@Controller()
export class AccountResolver {
  constructor(private readonly accountController: AccountController) {}

  @Mutation((returns) => LoginOutput)
  async register(@Context() ctx: any, @Args('RegisterInput') input: RegisterInput) {
    input.ip = ctx.req.ip;
    return this.accountController.register(input);
  }

  @Mutation((returns) => LoginOutput)
  async login(@Context() ctx: any, @Args('LoginInput') input: LoginInput) {
    input.ip = ctx.req.ip;
    return this.accountController.login(input);
  }

  @Query((returns) => LoginOutput)
  accounts() {
    return {};
  }
}
