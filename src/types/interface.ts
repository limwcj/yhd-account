import { RegisterLog, UserIdentifier, UserPassword, UserProfile } from '@prisma/client';

export enum IdPrefix {
  USER = 'usr',
}

export interface CreateAccountResult {
  createdUserProfile: UserProfile;
  createdUserPassword: UserPassword;
  createdRegisterLog: RegisterLog;
  createdUserIdentifier: UserIdentifier;
}
