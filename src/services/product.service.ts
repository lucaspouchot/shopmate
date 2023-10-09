import { ProductBoolType, ProductInterface } from "../interfaces/product.interface";
import { useEffect, useState } from "react";
import { FetchGetResponse, useFetchGet } from "../hooks/useFetch";

export namespace ProductService {
  export function useGet(filter?: ProductBoolType): FetchGetResponse<ProductInterface[]> {
    const [url, setUrl] = useState<URL | string | null>(null);
    const response = useFetchGet<ProductInterface[]>(url);

    useEffect(() => {
      const newUrl = new URL('http://localhost:8080/products');
      if (filter) {
        if (filter.in_stock !== undefined) {
          newUrl.searchParams.append('in_stock', String(filter.in_stock));
        }
      }
      setUrl(newUrl);
    }, [filter]);

    return response;
  }
}

export default ProductService;
