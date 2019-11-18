import axios from 'axios'

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
    dispatch(gotPhoto(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_PHOTO:
      let data = action.photo.pop()
      // console.log('why is data wrong?', data.description)
      // console.log('why is data wrong?', data.translation)
      return data
    default:
      return state
  }
}
