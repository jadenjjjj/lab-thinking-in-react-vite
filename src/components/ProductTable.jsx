import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
