import React from 'react';

function ProductRow(props) {
  const { product } = props;
  const name = product.inStock ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      <td>{product.inStock ? 'Yes' : 'No'}</td>
    </tr>
  );
}

export default ProductRow;
