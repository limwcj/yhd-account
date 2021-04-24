import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { SaveAccountDataPo } from './account.data.po';

@Injectable()
export class AccountData {
  constructor(private readonly prisma: PrismaService) {}

  saveAccount({ userProfile, userIdentifier, userPassword }: SaveAccountDataPo) {
    const txns = [
      this.prisma.client.userProfile.create(userProfile),
      this.prisma.client.userIdentifier.create(userIdentifier),
      this.prisma.client.userPassword.create(userPassword),
    ];
    return this.prisma.client.$transaction(txns);
  }
}
