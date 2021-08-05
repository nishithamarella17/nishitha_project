import { LOGIN_USER_SUCCESS, USER_LIST_SUCCESS } from '../constants/action-type'

const initialState = {
    user: '',
    list: [],
    error: null,
    loading:false,
}

const dashBoardReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                user: action,
                loading:true
            }
        case USER_LIST_SUCCESS:
            return{
                ...state,
                list: action,
                loading:true
            }
        default: return state
    }
   
}

export default dashBoardReducer