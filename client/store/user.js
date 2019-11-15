import axios from 'axios'
import history from '../history'

// action types
const GET_PHOTO = 'GET_PHOTO'

// action creators
const gotPhoto = photo => ({
  type: GET_PHOTO,
  photo
})

// thunks
export const getInfo = () => async dispatch => {
  console.log('getting to dispatch thunk')
  try {
    let {data} = await axios.get('/api/learn')
    // console.log('data from thunk', data)
    dispatch(gotPhoto(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_PHOTO:
      // console.log('data from action', action.photo.pop().fileName)
      console.log('data from action', action.photo.pop())
      return action.photo.pop()
    // return action
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}

// imgUrl i did this one, can prob delete
// export const translatePhoto = imgUrl => async dispatch => {
//   try {
//     const data = await axios.post('/api', {imgUrl})
//   } catch (error) {
//     console.error(error)
//   }
// }
