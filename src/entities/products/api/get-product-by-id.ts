import { type TProductDTO } from '../model/types';
import { productApi } from './instance.api';

type TProductResponse = {
  success: boolean;
  data: TProductDTO;
};

export const getProductById = (id: string | number) =>
  productApi.get<TProductResponse>(`/${id}`, {
    cache: 'no-store',
  });
