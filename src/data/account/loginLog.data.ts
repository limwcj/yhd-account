import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class LoginLogData {
  constructor(private readonly prisma: PrismaService) {}

  create(args: Prisma.LoginLogCreateArgs) {
    return this.prisma.client.loginLog.create(args);
  }
}
