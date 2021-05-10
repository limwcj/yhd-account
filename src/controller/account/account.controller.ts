import { Injectable } from '@nestjs/common';
import { RegisterInput } from '../../dto/input/register.input';
import { AccountService } from '../../services/account/account.service';

@Injectable()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  async register(input: RegisterInput) {
    return this.accountService.createAccount(input);
  }
}
