import React, { useState, useEffect } from 'react';
import data from './data';
import AllTheThings from './AllTheThings';
import MyShoppingCart from './MyShoppingCart'


function App() {
  const [products, setProducts]=useState([]);
  const [name, setName]=useState('');
  const [price, setPrice]=useState(0);
  const [description, setDescription]=useState('');
  const [cartItem, setCartItem]=useState([])



  const handleChange=(event) => {
    console.log(event.target.value)
    setName(event.target.value)

  }
  const handlePriceChange=(event) => {
    setPrice(event.target.value)
  }

  const handleDescChange=(event) => {
    setDescription(event.target.value)
  };

  const handleSubmit=(event) => {
    event.preventDefault();
    const newItem={
      name: name,
      price: price,
      description: description
    }
    setProducts([...products, newItem]);
    setName('');
    setPrice(0);
    setDescription('');
  };


  const handleAddCart=(product) => {
    let exists=false

    // check product existance in cart
    cartItem?.forEach(element => {
      if (element.name===product.name) exists=true
    });

    // init new cart instance
    let newCart;


    // if exists in previous cart then add the quantity
    if (exists) {
      newCart=cartItem?.map(item => {
        if (item.name===product.name) {
          return {
            ...item, quantity: item.quantity+1
          }
        }
        return {
          ...item
        }
      })
    } else {

      // else insert new item in the cart
      newCart=[...cartItem, { ...product, quantity: 1 }]
    }

    // finally return new cart
    return setCartItem(newCart)


  }

  useEffect(() => {
    setProducts(data);
  }, [])

  return (
    <div>
      <div className="col-6">
        <h1> Big Time Shopping </h1>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={handleChange} id="name" />
          <br />

          <label htmlFor="price">Price</label>
          <input type="number" value={price} onChange={handlePriceChange} id="price" />
          <br />

          <label htmlFor="description">Description</label>
          <input type="textarea" style={{ marginLeft: "2rem", padding: "1rem 10rem" }} value={description} onChange={handleDescChange} id="description" />
          <br />

          <input style={{ marginTop: "1rem", padding: "0.3rem 2rem", borderRadius: "5px", border: "white", color: "#c5153b" }} type="submit" />
        </form>

        <div className="content">
          <h2>Preview our new item</h2>
          <h4>Name: {name}</h4>
          <h4>Price: {price}</h4>
          <h5>Description: {description}</h5>
        </div>
        <MyShoppingCart cart={cartItem} />

        <h2>All Products</h2>
        <AllTheThings products={products} addToCart={handleAddCart} />


      </div>
    </div>
  )
}

export default App;

