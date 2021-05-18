import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { BaseException } from '../../common/exception';
import { RedisService } from '../../common/redis/redis.service';
import { LoginInput } from '../../dto/input/login.input';
import { RegisterInput } from '../../dto/input/register.input';
import { LoginOutput } from '../../dto/output/login.output';
import { ErrorCode } from '../../errorCode';
import { AccountService } from '../../services/account/account.service';
import { UserIdentifierService } from '../../services/account/userIdentifier.service';
import { CreateAccountResult } from '../../types/interface';
@Injectable()
export class AccountController {
  private redisClient: Redis.Redis;

  constructor(
    private readonly accountService: AccountService,
    private readonly userIdentifierService: UserIdentifierService,
    private readonly redisService: RedisService,
  ) {
    this.redisClient = this.redisService.getClient();
  }

  async register(input: RegisterInput) {
    input.nickname = input.nickname || input.identifier;

    const hasRegistered = await this.userIdentifierService.getByIdentifier(input.identifier);
    if (hasRegistered) throw new BaseException('User already exists', ErrorCode.USER_ALREADY_EXISTS);

    const createAccountResult = await this.accountService.createAccount(input);

    return this.registerSuccess(createAccountResult);
  }

  private async registerSuccess(createAccountResult: CreateAccountResult): Promise<LoginOutput> {
    const {
      createdUserIdentifier: { identifier, loginType },
      createdUserProfile: { id, nickname, sex, headimg },
      createdRegisterLog: { createdAt },
    } = createAccountResult;
    return { id, identifier, loginType, sex, headimg, nickname, regTime: createdAt };
  }

  async login(input: LoginInput) {}
}
