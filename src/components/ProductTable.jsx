import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
    const { products } = props;
    const rows = products.map((product) => 
    (<ProductRow key={product.id} product={product} /> ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>In Stock</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default ProductTable;