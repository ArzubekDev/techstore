import { z } from 'zod';

export const createProductSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, 'Название должно содержать минимум 2 символа')
    .max(200, 'Название не должно превышать 200 символов'),
  category: z
    .string()
    .trim()
    .min(1, 'Укажите категорию товара')
    .max(100, 'Категория не должна превышать 100 символов'),
  price: z
    .number({ error: 'Укажите цену' })
    .optional()
    .refine((value) => value !== undefined, 'Укажите цену')
    .refine((value) => value !== undefined && value > 0, {
      message: 'Цена должна быть больше 0',
    })
    .refine((value) => value !== undefined && value <= 99_999_999, {
      message: 'Слишком большая цена',
    }),
  image_url: z
    .string()
    .trim()
    .url('Укажите корректную ссылку на изображение'),
  description: z
    .string()
    .trim()
    .max(2000, 'Описание не должно превышать 2000 символов')
    .optional(),
});

export type TCreateProductFormValues = z.infer<typeof createProductSchema>;

export const createProductDefaultValues: TCreateProductFormValues = {
  title: '',
  category: '',
  image_url: '',
  description: '',
};
