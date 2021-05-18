import { Module } from '@nestjs/common';
import { RedisModule } from '../../common/redis/redis.module';
import { AccountServiceModule } from '../../services/account/account.service.module';
import { AccountController } from './account.controller';

@Module({
  imports: [AccountServiceModule, RedisModule],
  providers: [AccountController],
  exports: [AccountController],
})
export class AccountControllerModule {}
