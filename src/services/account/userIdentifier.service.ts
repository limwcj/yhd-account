import { Injectable } from '@nestjs/common';
import { UserIdentifierData } from '../../data/account/userIdetifier.data';

@Injectable()
export class UserIdentifierService {
  constructor(private readonly userIdentifierData: UserIdentifierData) {}

  getByIdentifier(identifier: string) {
    return this.userIdentifierData.getByIdentifier(identifier);
  }
}
