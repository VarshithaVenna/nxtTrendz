// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })

      return (
        <>
          <div>
            <h1>Order Total: Rs {total} /-</h1>
            <p>{cartList.length} Items in cart</p>
            <button type="button">Checkout</button>
            <button type="button">Checkout</button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
