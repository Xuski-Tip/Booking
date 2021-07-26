import SET_TYPE from "../../simpleJs/jurnalType"

export function set_state(data) {
    return {
        type: SET_TYPE,
        payload: data
    }
}