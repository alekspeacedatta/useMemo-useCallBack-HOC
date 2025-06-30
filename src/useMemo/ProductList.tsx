import { useMemo, useState } from "react";
interface ProductType {
    id: number;
    price: number;
    quantity: number;
}
const products : ProductType[] = [
    {id: 1, price: 200, quantity: 2},
    {id: 2, price: 300, quantity: 4},
    {id: 3, price: 400, quantity: 2},
    {id: 4, price: 500, quantity: 5},
]
const ProductList = () => {
    const [cart, setCartItem] = useState<ProductType[]>([]);
    
    const totalPrice = useMemo(() => {
        console.log('cacac');
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    }, [cart]) 
    
    const sortedProducts = useMemo(() => {
        return [...cart].sort((a, b) => a.price - b.price);
    }, [cart]) 
    
    
    const addToCart = (product: ProductType) => {
        setCartItem(prev => {
            const exists = prev.find(item => item.id === product.id);
            return exists ? prev : [...prev, product]
        })
    }
    
    const removeFromCart = (product: ProductType) => {
        setCartItem(prev => prev.filter(item => item.id !== product.id))
    }
    
    const [count, setCount] = useState(0);
    const slowCalculation = useMemo(() => {
        let a = 0;
        for (let i = 0; i < 10000; i++) {
              a =+ i;       
        }
        return (a * count);
    }, [count])

    return (
        <>
            <button onClick={() => {setCount(prev => prev + 1)}}>increase {count}, {slowCalculation}</button>
            <ul>
                {products.map(product => (
                        <li key={product.id}>
                            <p>
                                price: $ {product.price}
                            </p>
                            <p>
                                quantity:  {product.quantity}
                            </p>
                            <button onClick={() => { addToCart(product) }}>add to cart</button>
                            <button onClick={() => { removeFromCart(product) }}>remove from cart</button>
                        </li>
                ))}        
            </ul>
            <div>
                {cart.map(item => (
                    <div key={item.id}>
                        id: {item.id}
                        price: $ {item.price} 
                        quantity: {item.quantity}
                    </div>
                ))}
                total price: $ {totalPrice}
            </div>
            <div>
                <h2>sorted products by price:</h2>
                {sortedProducts.map(item => (
                    <div key={item.id}>
                        id: {item.id}
                        price: $ {item.price} 
                        quantity: {item.quantity}
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProductList