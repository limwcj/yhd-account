import { LoginType, Prisma, RegisterLog, UserPassword, UserProfile } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { flakeId, hmacSHA1 } from '../../common/utils';
import { config } from '../../config';
import { RegisterLogData } from '../../data/account/registerLog.data';
import { UserIdentifierData } from '../../data/account/userIdetifier.data';
import { UserPasswordData } from '../../data/account/userPassword.data';
import { UserProfileData } from '../../data/account/userProfile.data';
import { RegisterInput } from '../../dto/input/register.input';
import { IdPrefix } from '../../types/interface';

@Injectable()
export class AccountService {
  constructor(
    private readonly userIdentifierData: UserIdentifierData,
    private readonly userProfileData: UserProfileData,
    private readonly userPasswordData: UserPasswordData,
    private readonly prismaService: PrismaService,
    private readonly registerLogData: RegisterLogData,
  ) {}

  createUserId() {
    return IdPrefix.USER + flakeId();
  }

  async createAccount(
    input: RegisterInput,
  ): Promise<{ createdUserProfile: UserProfile; createdUserPassword: UserPassword; createdRegisterLog: RegisterLog }> {
    const { nickname, sex, headimg, password, ip } = input;
    const userId = this.createUserId();
    const encryptedPassword = hmacSHA1(password, config.pwdSalt);

    const userProfile: Prisma.UserProfileCreateArgs = { data: { id: userId, nickname, sex, headimg } };
    const userPassword: Prisma.UserPasswordCreateArgs = { data: { id: userId, password: encryptedPassword } };
    const registerLog: Prisma.RegisterLogCreateArgs = {
      data: { id: userId, loginType: LoginType.PHONE_NUMBER, identifier: userId, ip },
    };
    const txns = [
      this.userProfileData.create(userProfile),
      this.userPasswordData.create(userPassword),
      this.registerLogData.create(registerLog),
    ];
    const [createdUserProfile, createdUserPassword, createdRegisterLog] = await this.prismaService.transaction(txns);
    return { createdUserProfile, createdUserPassword, createdRegisterLog };
  }
}
