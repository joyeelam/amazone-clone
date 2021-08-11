import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {signin} from '../actions/userActions'

const SigninScreen = (props) => {

  const dispatch = useDispatch()
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector(state => state.userSignin)
  const {userInfo, loading, error} = userSignin

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signin(email, password))
  }

  useEffect(()=>{
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [userInfo, props.history, redirect])

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant='danger'>{error}</MessageBox>}
        <div>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            placeholder='Enter email'
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter password'
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label/>
          <button
            className='primary'
            type='submit'
          >
            Sign In
          </button>
        </div>
        <div>
          <label/>
          <div>
            New customer? {' '}
            <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SigninScreen
