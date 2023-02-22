import React, { useState } from 'react';
import data from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [filterText, setFilterText] = useState('');

    function handleFilterTextChange(filterText) {
        setFilterText(filterText);
    }

    //Filter the products based on the user's search query
    const filteredProducts = data.filter((product) => 
        product.name.toLowerCase().includes(filterText.toLowerCase()))

    return (
        <div className='ProductPage'>
            <SearchBar
            filterText={filterText}
            onFilterTextChange={handleFilterTextChange} 
            />
            <ProductTable products={filteredProducts}/>
        </div>
    )
};



export default ProductsPage;

