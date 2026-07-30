import { productApi } from '@/entities/products/api/instance.api';
import { type TProductDTO } from '@/entities/products/model/types';
import { type TPaginatedResponse } from '@/shared/types/pagination';

export const getProducts = () =>
  productApi.get<TPaginatedResponse<TProductDTO>>('', {
    cache: 'no-store',
  });
