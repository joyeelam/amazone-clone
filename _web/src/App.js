import {Route, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import OrderScreen from './screens/OrderScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import OrderHistoryScreen from './screens/OrderHistoryScreen'
import ProfileScreen from './screens/ProfileScreen'

import {signout} from './actions/userActions'

const App = () => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  const userSignin = useSelector(state => state.userSignin)
  const {userInfo} = userSignin

  const handleSignout = () => {
    dispatch(signout())
  }

  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <Link to='/' className='brand'>amazone</Link>
        </div>
        <div>
          <Link to='/cart'>Cart
            {cartItems.length > 0 && (
              <span className='badge'>{cartItems.length}</span>
            )}
          </Link>
          {
            userInfo ? (
              <div className='dropdown'>
                <Link to='#'>
                  {userInfo.name} <i className='fa fa-caret-down'></i>{' '}
                </Link>
                <ul className='dropdown-content'>
                  <li>
                    <Link to='/orderhistory'>Order History</Link>
                  </li>
                  <li>
                    <Link to='/profile'>User Profile</Link>
                  </li>
                  <li>
                    <Link to='#signout' onClick={handleSignout}>Sign Out</Link>
                  </li>
                </ul>
              </div>
            )
            : (<Link to='/signin'>Sign In</Link>)
          }
        </div>
      </header>
      <main>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/product/:id' component={ProductScreen}/>
        <Route path='/cart/:id?' component={CartScreen}/>
        <Route path='/signin' component={SigninScreen}/>
        <Route path='/register' component={RegisterScreen}/>
        <Route path='/shipping' component={ShippingScreen}/>
        <Route path='/payment' component={PaymentScreen}/>
        <Route path='/confirmorder' component={OrderScreen}/>
        <Route path='/orderhistory' component={OrderHistoryScreen}/>
        <Route path='/order/:id' component={CheckoutScreen}/>
        <Route path='/profile' component={ProfileScreen}/>
      </main>
      <footer className='row center'>
        All rights reserved &copy;
      </footer>
    </div>
  )
}

export default App
