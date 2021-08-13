import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {profile} from '../actions/userActions'

const ProfileScreen = () => {

  const dispatch = useDispatch()
  const userSignin = useSelector(state => state.userSignin)
  const {userInfo} = userSignin
  const userDetails = useSelector(state => state.userDetails)
  const {loading, error, user} = userDetails

  useEffect(() => {
    dispatch(profile(userInfo._id))
  }, [dispatch, userInfo._id])

  const handleSubmit = e => {
    e.preventDefault()
    // todo
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <h1>User Profile</h1>
        </div>
        {
          loading ? <LoadingBox/>
          :
          error ? <MessageBox variant='danger'>{error}</MessageBox>
          :
          <>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                type='text'
                placeholder='Enter name'
                value={user.name}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='Enter email'
                value={user.email}
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                placeholder='Enter password'
                value={user.password}
              />
            </div>
            <div>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                id='confirmPassword'
                type='password'
                placeholder='Confirm password'
              />
            </div>
            <div>
              <label/>
              <button className='primary' type='submit'>
                Update Profile
              </button>
            </div>
          </>
        }
      </form>
    </div>
  )
}

export default ProfileScreen
