import { PagedList } from 'contensis-core-api';

export type ContensisPagedList<T> = PagedList<T> & { pageCount: number };
