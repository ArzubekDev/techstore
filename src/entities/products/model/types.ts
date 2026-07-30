export type TProductDTO = {
  _id: number | string;
  title: string;
  description?: string;
  price: number;
  category: string;
  image_url: string;
  createdAt?: string;
  updatedAt?: string;
};

export type TCreateProductPayload = Omit<
  TProductDTO,
  '_id' | 'createdAt' | 'updatedAt'
>;
