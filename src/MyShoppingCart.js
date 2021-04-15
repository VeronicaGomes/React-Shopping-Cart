const MyShoppingCart=({ cart }) => {

    return (
        <div className="MyShoppingCart">
            <h2>Your Cart</h2>
            <hr />
            <ul>
                {
                    cart?.map((item, index) => {
                        return (
                            <li key={index}>{item.name}({item.quantity}) - {item.price*item.quantity}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default MyShoppingCart;