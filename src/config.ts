import Redis from 'ioredis';

export const config = {
  port: process.env.PORT || 9000,
  appSecret: process.env.APP_SECRET || 'yxHA1LE5HHnbiP62nhG47O4XNFEcIQz0',
  pwdSalt: process.env.PWD_SALT || 'O4Mbi6wV1ptDhe8mYOMD6n3wxZpoXRST',
  datacenter: Number(process.env.DATACENTER || 1),
  worker: Number(process.env.WORKER || 1),
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT || '6379'),
    db: Number(process.env.REDIS_DB || '0'),
    password: process.env.REDIS_PASSWORD || 'treelab',
  } as Redis.RedisOptions,
};
