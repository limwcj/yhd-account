import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  client: PrismaClient;

  constructor() {
    const options: Prisma.PrismaClientOptions = {};
    if (process.env.NODE_ENV.startsWith('dev')) {
      options.log = ['query'];
    }
    this.client = new PrismaClient(options);
  }

  transaction(txns: any[]) {
    return this.client.$transaction(txns);
  }
}
