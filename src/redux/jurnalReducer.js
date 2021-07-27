import {SET_TYPE} from "../simpleJs/jurnalType";


const initialState = {
    jurnal: []
};

export const jurnalReducer = (state = initialState, action) => {
    if (action.type === SET_TYPE){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
};