import { ClassConstructor, plainToClass as ptc } from 'class-transformer';
import { validateSync } from 'class-validator';
import { HmacSHA1 } from 'crypto-js';
import { config } from '../../config';
import { EncodingType, FlakeId } from './flakeId';

const flakeIdGen = new FlakeId({
  datacenter: config.datacenter,
  worker: config.worker,
});

export function plainToClassWithValidate<T, V>(classType: ClassConstructor<Object>, data: V): Object {
  const c = ptc(classType, data);
  const errors = validateSync(c, { forbidUnknownValues: true });
  if (errors.length > 0) throw new Error(JSON.stringify(errors.map((e) => e.toString())));
  return c;
}

export function flakeId(encodingType: EncodingType = EncodingType.BASE34) {
  flakeIdGen.id = Math.floor(Math.random() * 1024);
  return flakeIdGen.next(encodingType);
}

export function isValidflakeId(o: string | Buffer, encodingType: EncodingType = EncodingType.BASE34) {
  return flakeIdGen.isValid(o, encodingType);
}

export function getClientIP(req: any) {
  return (req.headers['x-forwarded-for'] as string) || req.connection.remoteAddress || '';
}

export function hmacSHA1(text: string, key: string) {
  return HmacSHA1(text, key).toString();
}
