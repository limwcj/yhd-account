import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class RegisterLogData {
  constructor(private readonly prisma: PrismaService) {}

  create(args: Prisma.RegisterLogCreateArgs) {
    return this.prisma.client.registerLog.create(args);
  }
}
