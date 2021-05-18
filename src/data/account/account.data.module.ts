import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/prisma/prisma.module';
import { LoginLogData } from './loginLog.data';
import { RegisterLogData } from './registerLog.data';
import { UserIdentifierData } from './userIdetifier.data';
import { UserPasswordData } from './userPassword.data';
import { UserProfileData } from './userProfile.data';

@Module({
  imports: [PrismaModule],
  providers: [UserIdentifierData, UserProfileData, UserPasswordData, RegisterLogData, LoginLogData],
  exports: [UserIdentifierData, UserProfileData, UserPasswordData, RegisterLogData, LoginLogData],
})
export class AccountDataModule {}
