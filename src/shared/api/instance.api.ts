import { FetchClient } from '@/shared/utils/fetch/fetch-client';

const CRUD_BASE_URL = process.env.NEXT_PUBLIC_CRUD_BASE_URL;

export const createResourceClient = (resource: string) =>
  new FetchClient({ baseUrl: `${CRUD_BASE_URL}/${resource}` });
