import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/prisma/prisma.module';
import { AccountDataModule } from '../../data/account/account.data.module';
import { AccountService } from './account.service';
import { UserIdentifierService } from './userIdentifier.service';
import { UserPasswordService } from './userPassword.service';
import { UserProfileService } from './userProfile.service';

@Module({
  imports: [AccountDataModule, PrismaModule],
  providers: [UserIdentifierService, UserProfileService, UserPasswordService, AccountService],
  exports: [UserIdentifierService, UserProfileService, UserPasswordService, AccountService],
})
export class AccountServiceModule {}
