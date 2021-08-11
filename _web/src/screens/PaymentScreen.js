import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import CheckoutSteps from '../components/CheckoutSteps'
import {savePaymentMethod} from '../actions/cartActions'

const PaymentScreen = (props) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart

  if (!shippingAddress.address) {
    props.history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    props.history.push('/confirmorder')
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3/>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <input
            type='radio'
            id='paypal'
            value='PayPal'
            name='paymentMethod'
            required
            checked
            onChange={e => setPaymentMethod(e.target.value)}
          ></input>
          <label htmlFor='paypal'>PayPal</label>
        </div>
        <div>
          <input
            type='radio'
            id='stripe'
            value='Stripe'
            name='paymentMethod'
            required
            onChange={e => setPaymentMethod(e.target.value)}
          ></input>
          <label htmlFor='stripe'>Stripe</label>
        </div>
        <div>
          <button className='primary' type='submit'>Continue</button>
        </div>
      </form>
    </div>
  )
}

export default PaymentScreen
