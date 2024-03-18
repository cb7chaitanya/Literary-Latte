import React, {useState, useEffect, useContext} from 'react'
import OrderTicket from './OrderTicket'
import {Link, useNavigate} from 'react-router-dom'
import {CartContext, Context} from '../Context'

function Cart() {
  const{cart, setCart} = useContext(CartContext)
  const [total, setTotal ] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
   setTotal(cart.reduce((acc,curr) => acc+ Number(curr.price),0));
  }, [cart]);

  const handleProceedToCheckout = () => {
    if (total > 0) {
      // Proceed to checkout
      // Redirect to the checkout page
      navigate('/Checkout', { state: { total } } );
    } else {
      // Display a message that the cart is empty
      alert('Your cart is empty!');
    }
  };

  return (
    <div className='text-brown overflow-hidden'>
    <h1 className='text-6xl text-center mt-8 sm:text-7xl md:text-8xl'>Cart</h1>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Delivery List</p>
    <div className='flex'>
      <div className='w-[60%]'>
        {cart.map((item, index) => (
          <OrderTicket item={item} key={index} cart={cart} setCart={setCart}>
          </OrderTicket>
        ))}
      </div>
      <div>
        <h1 className='text-3xl font-semibold mt-8 ml-8'>Total(inc.of all Taxes): {total}</h1>
        <button onClick={handleProceedToCheckout} className='bg-brown text-white mt-8 ml-8 px-4 py-2 rounded-xl hover:bg-gray-700 duration-300'>Proceed To Checkout</button>
      </div>
    </div>
    </div>
  )
}

export default Cart