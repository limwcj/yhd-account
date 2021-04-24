import { Module } from '@nestjs/common';
import { AccountServiceModule } from '../../services/account/account.service.module';
import { AccountController } from './account.controller';

@Module({
  imports: [AccountServiceModule],
  providers: [AccountController],
  exports: [AccountController],
})
export class AccountControllerModule {}
