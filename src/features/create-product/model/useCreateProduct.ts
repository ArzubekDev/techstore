'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createProduct } from '@/entities/products/api/create-product';
import { ROUTE } from '@/shared/consts/routes';
import { FetchError } from '@/shared/utils/fetch/fetch-error';

import {
  createProductDefaultValues,
  createProductSchema,
  type TCreateProductFormValues,
} from './create-product.schema';

const getErrorMessage = (error: unknown) => {
  if (error instanceof FetchError) {
    return error.message || 'Не удалось создать товар';
  }

  return 'Не удалось создать товар. Попробуйте позже';
};

export const useCreateProduct = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<TCreateProductFormValues>({
    resolver: zodResolver(createProductSchema),
    defaultValues: createProductDefaultValues,
    mode: 'onBlur',
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setIsSubmitting(true);

    try {
      if (values.price === undefined) {
        return;
      }

      await createProduct({
        title: values.title,
        category: values.category,
        price: values.price,
        image_url: values.image_url,
        ...(values.description && { description: values.description }),
      });

      message.success('Товар успешно создан');
      form.reset(createProductDefaultValues);
      router.push(ROUTE.catalog.root);
    } catch (error) {
      message.error(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  });

  const onCancel = () => {
    if (isSubmitting) return;
    router.push(ROUTE.profile.root);
  };

  return {
    form,
    onSubmit,
    onCancel,
    isSubmitting,
  };
};
