import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {profile, update} from '../actions/userActions'
import {USER_UPDATE_PROFILE_RESET} from '../constants/userConstants'

const ProfileScreen = () => {

  const dispatch = useDispatch()
  const userSignin = useSelector(state => state.userSignin)
  const {userInfo} = userSignin
  const userDetails = useSelector(state => state.userDetails)
  const {loading, error, user} = userDetails
  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const {success: successUpdate, error: errorUpdate, loading: loadingUpdate} = userUpdateProfile

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    if (!user) {
      dispatch({
        type: USER_UPDATE_PROFILE_RESET
      })
      dispatch(profile(userInfo._id))
    } else {
      setName(user.name)
      setEmail(user.email)
    }
  }, [dispatch, userInfo._id, user])

  const handleSubmit = e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
    } else {
      dispatch(update({
        userId: user._id, name, email, password
      }))
    }
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
            {loadingUpdate && <LoadingBox/>}
            {errorUpdate && <MessageBox variant='danger'>{errorUpdate}</MessageBox>}
            {successUpdate && <MessageBox variant='success'>Profile updated successfully.</MessageBox>}
            <div>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                placeholder='Enter password'
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                id='confirmPassword'
                type='password'
                placeholder='Confirm password'
                onChange={e => setConfirmPassword(e.target.value)}
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
