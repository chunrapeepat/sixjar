import {OVERVIEW, CHANGE_PAGE_ACTION} from './constant'

export const pageReducer = (state = OVERVIEW, action) => {
  switch (action.type) {
    case CHANGE_PAGE_ACTION:
      state = action.payload
      return state
  }
  return state
}
