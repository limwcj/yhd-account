import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { config } from '../../config';

@Injectable()
export class RedisService {
  private client: Redis.Redis;

  constructor() {
    this.client = new Redis(config.redis);
  }

  getClient() {
    return this.client;
  }
}
