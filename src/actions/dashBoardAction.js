import { LOGIN_USER_SUCCESS, USER_LIST_SUCCESS } from '../constants/action-type'
import loginData from '../loginData.json'
import dashBoardPage from '../dashBoardPage.json'

export const loginSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    user
})

export const fetchListSuccess = (list) => ({
    type: USER_LIST_SUCCESS,
    list
})

export function userLogin(){
    return dispatch => {
        dispatch(loginSuccess(loginData))
    }
}

export function usersList(){
    return dispatch => {
        dispatch(fetchListSuccess(dashBoardPage))
    }
}