import { Injectable } from '@nestjs/common';
import { UserPasswordData } from '../../data/account/userPassword.data';

@Injectable()
export class UserPasswordService {
  constructor(private readonly userPasswordData: UserPasswordData) {}
}
