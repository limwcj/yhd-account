import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class UserPasswordData {
  constructor(private readonly prisma: PrismaService) {}

  create(args: Prisma.UserPasswordCreateArgs) {
    return this.prisma.client.userPassword.create(args);
  }
}
