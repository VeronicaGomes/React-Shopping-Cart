import React from 'react';

const AllTheThings=({ products, addToCart }) => {



    return (
        <ul>
            {products.map((product, index) => {
                return <li onClick={() => addToCart(product)} className="item" key={index}>
                    <div className="product" >{product.name}-{product.price} </div>
                    <div className="des">{product.description}</div>
                </li>
            })}

        </ul>
    )
}

export default AllTheThings;