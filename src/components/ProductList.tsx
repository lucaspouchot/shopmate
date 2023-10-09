import { useState } from "react"
import ProductService from "../services/product.service";
import { ProductCard } from './ProductCard';

export function ProductList() {
  const [options, setOptions] = useState({
    filter: {}
  });
  const { data: products, loading: loadingProducts, error: errorProducts } = ProductService.useGet(options.filter);

  return (
    <section>
      <button onClick={() => setOptions({filter: {}})}>All</button>
      <button onClick={() => setOptions({filter: { in_stock: true }})}>In stock</button>
      {
        loadingProducts && <p>Loading</p>
      }
      {
        errorProducts && <p>Error: {errorProducts.message}</p>
      }
      {
        products && products.map(product => <ProductCard key={product.id} item={product}/>)
      }
    </section>
  )
}
