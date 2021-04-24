import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class UserIdentifierData {
  constructor(private readonly prisma: PrismaService) {}

  create(args: Prisma.UserIdentifierCreateArgs) {
    return this.prisma.client.userIdentifier.create(args);
  }
}
