import { Prisma } from '.prisma/client';

export interface SaveAccountDataPo {
  userIdentifier: Prisma.UserIdentifierCreateArgs;
  userProfile: Prisma.UserProfileCreateArgs;
  userPassword: Prisma.UserPasswordCreateArgs;
}
