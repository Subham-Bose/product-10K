export interface Product {
  id: string;
  sku: string;
  productName: string;
  translatedName: string;
  price: number;
  quantityInStock: number;
  isActive: boolean;
  categoryName: string;
  parentCategoryId: string | null;
  warehouseName: string;
  warehouseAddress: string;
  imageUrl: string;
  languageCode: string;
  localizedProductName?: string;
}
