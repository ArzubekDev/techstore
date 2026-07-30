import { notFound } from 'next/navigation';

import { getProductById } from '@/entities/products/api/get-product-by-id';
import { ProductDetails } from '@/widgets/product-details';

type TProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: TProps) {
  const { id } = await params;

  try {
    const response = await getProductById(id);

    if (!response.success || !response.data) {
      notFound();
    }

    return <ProductDetails product={response.data} variant="page" />;
  } catch {
    notFound();
  }
}
