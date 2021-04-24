import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/prisma/prisma.module';
import { AccountData } from './account.data';
import { UserIdentifierData } from './userIdetifier.data';
import { UserPasswordData } from './userPassword.data';
import { UserProfileData } from './userProfile.data';

@Module({
  imports: [PrismaModule],
  providers: [UserIdentifierData, UserProfileData, UserPasswordData, AccountData],
  exports: [UserIdentifierData, UserProfileData, UserPasswordData, AccountData],
})
export class AccountDataModule {}
