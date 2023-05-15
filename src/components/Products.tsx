import { FC } from 'react';
import Products from '../models/products-models';
import { AddToCartIcon } from './Icons';
import './Products.css';

interface CartProps {
  products: Products[];
}

const Products: FC<CartProps> = ({ products }) => {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map(product => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
