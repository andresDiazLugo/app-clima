import {GET_CLIMA,DELETE_CARD, REPETIDOS} from '../types'
export const reducer = (state, action)=>{
    const {type,payload} = action

    switch(type){

        case GET_CLIMA:
          
            return {
                ...state,
                clima:[...state.clima, payload],
            }
        case DELETE_CARD:
            return {
                ...state,
                clima:state.clima.filter(e=> e.id !== payload)
            }
        case REPETIDOS:
            return {
                ...state,
                clima: state.clima.filter((e,i)=> {return state.clima.indexOf(e)=== i})
            }
        default:
            return state
    }
}