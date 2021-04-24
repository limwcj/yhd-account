import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class UserProfileData {
  constructor(private readonly prisma: PrismaService) {}

  create(args: Prisma.UserProfileCreateArgs) {
    return this.prisma.client.userProfile.create(args);
  }
}
