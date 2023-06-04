import React from 'react'
import '../styles/Index.css';
import { CartItem } from '../Index';
import { useGlobalContext } from '../context/Context';
const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h4>We offer the most exciting and crazy deals to our customers.</h4>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty. Please keep shopping</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
    {/* cart header */}
    <header>
      <h2>your bag</h2>
    </header>
    {/* cart items */}
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
    </div>
    {/* cart footer */}
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>${total}</span>
        </h4>
      </div>
      <button className='btn clear-btn' onClick={clearCart}>
        clear cart
      </button>
    </footer>
  </section>
  )
}

export default CartContainer
