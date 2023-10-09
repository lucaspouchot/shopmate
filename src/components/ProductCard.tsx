import { ProductInterface } from '../interfaces/product.interface';
import './productCard.css';

type Props = {
  item: ProductInterface
}

export function ProductCard({ item }: Props) {
  return (
    <div className='card'>
      <p className='name'>{ item.name }</p>
      <p className='info'>
        <span>{ item.price }€</span>
        <span className={ item.in_stock ? 'instock' : 'unavailable' }>{ item.in_stock ? 'In stock' : 'Out of stock' }</span>
      </p>
    </div>
  )
}