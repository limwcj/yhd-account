import { Module } from '@nestjs/common';
import { AccountControllerModule } from '../../controller/account/account.controller.module';
import { AccountResolver } from './account.resolver';

@Module({
  imports: [AccountControllerModule],
  providers: [AccountResolver],
  controllers: [AccountResolver],
  exports: [AccountResolver],
})
export class AccountResolverModule {}
