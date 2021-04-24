import { Injectable } from '@nestjs/common';
import { UserProfileData } from '../../data/account/userProfile.data';

@Injectable()
export class UserProfileService {
  constructor(private readonly userProfileData: UserProfileData) {}
}
