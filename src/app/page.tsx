'use client';
import { useEffect, useState } from 'react';

import { createResourceClient } from '@/shared/api/instance.api';
import { type TProductDTO } from '@/entities/products/model/types';
import { type TPaginatedResponse } from '@/shared/types/pagination';

const productApi = createResourceClient('techstore');

export default function Home() {
  const [products, setProducts] =
    useState<TPaginatedResponse<TProductDTO> | null>(null);

  useEffect(() => {
    productApi.get<TPaginatedResponse<TProductDTO>>('').then((data) => {
      setProducts(data);
    });
  }, []);

  return <pre>{JSON.stringify(products, null, 2)}</pre>;
}
