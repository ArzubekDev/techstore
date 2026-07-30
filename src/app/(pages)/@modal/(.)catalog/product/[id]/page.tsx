import { notFound } from 'next/navigation';

import { getProductById } from '@/entities/products/api/get-product-by-id';
import { ProductModal } from '@/widgets/product-modal';

type TProps = {
  params: Promise<{ id: string }>;
};

export default async function InterceptedProductModalPage({ params }: TProps) {
  const { id } = await params;

  try {
    const response = await getProductById(id);

    if (!response.success || !response.data) {
      notFound();
    }

    return <ProductModal product={response.data} />;
  } catch {
    notFound();
  }
}
