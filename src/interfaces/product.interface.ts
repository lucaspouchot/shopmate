export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  in_stock: boolean;
}

export type ProductBoolType = AllBoolean<ProductInterface>;