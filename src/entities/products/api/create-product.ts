import { type TCreateProductPayload, type TProductDTO } from '../model/types';
import { productApi } from './instance.api';

export const createProduct = (payload: TCreateProductPayload) =>
  productApi.post<TProductDTO>('', payload);
