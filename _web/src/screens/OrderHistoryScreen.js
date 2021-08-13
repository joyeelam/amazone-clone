import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {listOrderHistory} from '../actions/orderActions'

const OrderHistoryScreen = (props) => {

  const dispatch = useDispatch()

  const orderHistory = useSelector(state => state.orderHistory)
  const {loading, error, orders} = orderHistory

  useEffect(()=>{
    dispatch(listOrderHistory())
  }, [dispatch])

  return (
    <div>
      <h1>Order History</h1>
      {loading ?
        (<LoadingBox/>)
        :
        error ?
        (<MessageBox variant='danger'>{error}</MessageBox>)
        :
        (
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Delivered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice.toFixed(2)}</td>
                  <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'Not Paid'}</td>
                  <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'Not Delivered'}</td>
                  <td>
                    <button
                      type='button'
                      class='small'
                      onClick={() => {props.history.push(`/order/${order._id}`)}}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default OrderHistoryScreen
