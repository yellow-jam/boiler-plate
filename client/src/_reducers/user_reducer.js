import {
    LOGIN_USER
} from '../_actions/types';


export default function user(state = {}, action) { // 여기서 state는 prevState, action이 현재 상태를 담고 있음
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.paylod }
            break;

        default:
            return state;
    }
}