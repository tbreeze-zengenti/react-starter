import { ContensisEntry } from '../contensis/entry.type';

export type ContentType<T> = ContensisEntry & T;

export type ContentTypePage<T> = ContentType<T> & Record<string, unknown>;
