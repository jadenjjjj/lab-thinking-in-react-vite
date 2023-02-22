import React from 'react';

function ProductRow(props) {
    const { name, price, inStock } = props.product;

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{inStock ? 'Yes' : 'No'}</td>
        </tr>
    )
}

export default ProductRow