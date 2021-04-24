import { Injectable } from '@nestjs/common';
import { flakeId } from '../../common/utils';
import { AccountData } from '../../data/account/account.data';
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
    private readonly accountData: AccountData,
  ) {}

  createUserId() {
    return IdPrefix.USER + flakeId();
  }

  saveAccount(input: RegisterInput) {
    const userId = this.createUserId();
    console.log(userId);
    // this.accountData.saveAccount({

    // })
  }
}
