import { getProducts } from '@/entities/products/api/get-products';
import { type TProductDTO } from '@/entities/products/model/types';
import { BannerContent } from '@/widgets/banner';
import { ProductList } from '@/widgets/product-list';

const HomePage = async () => {
  let products: TProductDTO[] = [];

  try {
    const response = await getProducts();
    products = response.data ?? [];
  } catch (error) {
    console.error('Failed to load products:', error);
  }

  return (
    <>
      <BannerContent />
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
