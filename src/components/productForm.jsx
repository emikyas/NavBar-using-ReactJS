import React from 'react';

const ProductForm = ({match, history}) => {
    return (
        <div>
            <h1>Product Details - {match.params.id}</h1>
            <button onClick={() => history.push('/products')}>Save</button>
        </div>
     );
}
 
export default ProductForm;